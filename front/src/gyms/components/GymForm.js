import styled from "styled-components";
import { IconButton, TextField, CircularProgress } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

const GymContainer = styled.div`
  display: flex;
  background-color: white;
  height: 400px;
  width: 600px;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
`;

const GymTextField = styled(TextField)`
  margin-top: 20px;
  width: 40%;
  align-self: center;
`;

const Icon = styled(IconButton)`
  margin-top: 50px;
  width: 50px;
  height: 50px;
  align-self: center;
  background-color: #c83672;
  color: white;

  &:hover {
    background-color: #6dbaa1;
  }
`;

const Spinner = styled(CircularProgress)`
  color: white;
`;

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
  } = gymFormProps;

  return (
    <GymContainer>
      <GymTextField
        required
        id="outlined-required"
        label="Gym Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <GymTextField
        required
        id="outlined-required"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <GymTextField
        id="date"
        label="Birthday"
        type="date"
        format="yyyy/mm/dd"
        defaultValue={openedSince}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setOpenedSince(e.target.value)}
      />

      <Icon onClick={() => handleRequest()}>
        {spinner ? <Spinner /> : <SaveAltIcon />}
      </Icon>
    </GymContainer>
  );
}
