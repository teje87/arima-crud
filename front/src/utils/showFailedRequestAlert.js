import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const showFailedRequestAlert = () => {
  return MySwal.fire({
    title: "Error!",
    text: "Something went wrong",
    icon: "error",
    confirmButtonText: "Cool",
  });
};
