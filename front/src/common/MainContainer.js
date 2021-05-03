import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const MainContainer = styled(Grid)`
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.colors.grey};
`;

MainContainer.defaultProps = {
  container: true,
  lg: 12,
  md: 12,
};
