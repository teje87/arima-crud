import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const MainContentContainer = styled(Grid)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

MainContentContainer.defaultProps = {
  container: true,
  lg: 8,
  md: 8,
};
