import React from "react";
import { Grid } from "@material-ui/core";

export default function MainContainer({ children }) {
  return (
    <Grid
      container
      lg={12}
      md={12}
      alignItems="center"
      direction="column"
      justify="flex-start"
      style={{
        height: "100vh",
      }}
    >
      {children}
    </Grid>
  );
}
