import { useEffect, useState } from "react";
import getGyms from "../services/gyms/getGyms";
import deleteGym from "../services/gyms/deleteGym";
import createGym from "../services/gyms/createGym";
import updateGym from "../services/gyms/updateGym";
import moment from "moment";
import { showFailedRequestAlert } from "../utils/showFailedRequestAlert";
import { regex } from '../utils/regex'

export function useGym() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [gyms, setGyms] = useState([]);
  const [modal, setModal] = useState(false);
  const [paginationCount, setPaginationCount] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [openedSince, setOpenedSince] = useState("2021-07-16");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isUpdating, setIsUpadting] = useState(false);
  const [gymId, setGymId] = useState("");
  const [nameError, setNameError ] = useState(false)
  const [phoneError, setPhoneError ] = useState(false)
  const [dateError, setDateError ] = useState(true)

  const fetchGyms = async (page) => {
    await setLoading(true);
    const res = await getGyms(page);
    const gymsData = res[0];
    const gymAmount = res[1];
    const pageAmount = Math.ceil(gymAmount / 3);
    await setGyms(gymsData);
    await setPaginationCount(pageAmount);
    await setLoading(false);
  };

  const handleDelete = async (gymId) => {
    try {
      const res = await deleteGym(gymId);
      if (res.status === 200) {
        await fetchGyms(page);
      }
    } catch (err) {
      throw new Error()
    }
  };

  const handleSubmit = async (name, phone, openedSince) => {
    try {
      setSpinner(true);
      const res = await createGym(name, phone, openedSince);

      if (res.status === 201) {
        setModal(false);
        await fetchGyms(page);
        /* Sweet alert y close */
      }
      setSpinner(false);
    } catch (err) {
      setSpinner(false);
      setModal(false);
      /* TODO show req error on sweet alert */
      showFailedRequestAlert();
    }
  };

  const handleUpdateSubmit = async (gymId, name, phone, openedSince) => {
    try {
      await setSpinner(true);
      const res = await updateGym(gymId, name, phone, openedSince);
      if (res.status === 200) {
        await setModal(false);
        await fetchGyms(page);
      }
      await setSpinner(false);
      await setIsUpadting(false);
    } catch (error) {
      await setModal(false);
      await setSpinner(false);
      /* TODO Show SweetAlert with req error */
      showFailedRequestAlert();
    }
  };

  const resetForm =  () => {
     setName("");
     setPhone("");
     setOpenedSince("");
     setPhoneError(false)
     setNameError(false)
     setDateError(false)
  };

  const handleEdit = async (name, phone, openedSince, gymId) => {
    await setIsUpadting(true);
    await setGymId(gymId);
    await setName(name);
    await setPhone(phone);
    await setOpenedSince(moment(openedSince).format("yyyy-MM-DD"));
    setModal(true);
  };

  const handleNew = async () => {
    resetForm();
    setModal(true);
  };


  const validateFields =  () => {
    const isNameEmpty = name.length === 0 ;
    const isPhoneEmpty = phone.length === 0;
    const isDateValid = regex.ddmmyyyyDate.test(openedSince);
    
    
    
    isNameEmpty ? setNameError(true) : setNameError(false)
    isPhoneEmpty ? setPhoneError(true) : setPhoneError(false)
    isDateValid ? setDateError(false) : setDateError(true)

    
    if(isNameEmpty || isPhoneEmpty || !isDateValid){
      return false;
    }else{
      return true
    }
  }

  const handleRequest = (e) => {
  
    const isFormValid = validateFields()
    if(isFormValid){
      return isUpdating
      ? handleUpdateSubmit(gymId, name, phone, openedSince)
      : handleSubmit(name, phone, openedSince);
    }
  
  };

  /* UseEffects */

  useEffect(() => {
    fetchGyms(page);
  }, [page]);

  useEffect(() => {
    if (modal === false) {
      setIsUpadting(false);
    }
  }, [modal]);

  return {
    modal,
    setModal,
    paginationCount,
    page,
    setPage,
    setSpinner,
    handleNew,
    gymCardListProps: {
      gyms,
      handleEdit,
      handleDelete,
      loading,
    },
    gymFormProps: {
      name,
      setName,
      phone,
      setPhone,
      openedSince,
      setOpenedSince,
      spinner,
      handleRequest,
      isUpdating,
      nameError,
      phoneError,
      dateError
    },
  };
}
