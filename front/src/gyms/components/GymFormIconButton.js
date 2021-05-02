import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const GymFormIconButton = styled(IconButton)`
  background-color: #c83672;
  margin-top: 50px;
  width: 50px;
  height: 50px;
  align-self: center;
  color: white;

  &:hover {
    background-color: #6dbaa1;
  }
`;
