import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { GymFormContainer } from "./GymFormContainer";
import { GymFormTextField } from "./GymFormTextField";
import { GymFormIconButton } from "./GymFormIconButton";
import { Spinner } from "../../common/Spinner";
import { StylesProvider } from "@material-ui/core";

export default function GymForm({ gymFormProps }) {
  const {
    handleRequest,
    name,
    setName,
    phone,
    setPhone,
    openedSince,
    setOpenedSince,
    spinner,
    nameError,
    phoneError
  } = gymFormProps;

  return (
    <form autoComplete="off">
      <GymFormContainer>
        <GymFormTextField
          required
          id="outlined-required"
          label="Gym Name"
          variant="outlined"
          error={nameError}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <GymFormTextField
          required
          id="outlined-required"
          label="Phone"
          error={phoneError}
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <GymFormTextField
          id="date"
          label="Opened Since"
          type="date"
          format="yyyy/mm/dd"
          defaultValue={openedSince}
          value={openedSince}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setOpenedSince(e.target.value)}
        />

        <GymFormIconButton  onClick={() => handleRequest()}>
          {spinner ? <Spinner /> : <SaveAltIcon />}
        </GymFormIconButton>
      </GymFormContainer>
    </form>
  );
}
