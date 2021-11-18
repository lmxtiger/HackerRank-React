import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Grow, Grid, Box } from "@material-ui/core";
import Stage from "./components/Stage.js";
import * as colors from "@material-ui/core/colors";
import { StateContext } from "./controllers/state.context";

import useStyles from "./App_styles";

const App = () => {
  const { box } = useStyles();
  const { stages } = useContext(StateContext);

  return (
    <Container width="lg">
      <Box
        display="flex"
        justifyContent="space-around"
        border={2}
        borderRadius={10}
        bgcolor="primary.main"
      >
        {stages.map((_, idx) => {
          return <Stage idx={idx} />;
        })}
      </Box>
    </Container>
  );
};

export default App;
