import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const GymFormIconButton = styled(IconButton)`
  background-color: ${(props) => props.theme.colors.pink};
  margin-top: 50px;
  width: 50px;
  height: 50px;
  align-self: center;
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
  }
`;
