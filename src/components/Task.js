import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { StateContext } from "../controllers/state.context";

import useStyles from "./Task_styles";

const Task = ({ data, disabled }) => {
  const { task, taskPos } = data;
  const { taskToMove, settaskToMove } = useContext(StateContext);
  const [selected, setSelected] = useState(false);

  const {} = useStyles();

  const arrayIsEq = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      return arr1.every((ele, idx) => ele === arr2[idx]);
    }
  };

  const handleClick = () => {
    settaskToMove(selected ? [-1, -1] : taskPos);
    // setSelected(!selected);
  };
  useEffect(() => {
    setSelected(arrayIsEq(taskPos, taskToMove));
  }, [taskPos, taskToMove]);

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      variant="outlined"
      style={{ width: "100%", backgroundColor: selected ? "lightgreen" : null }}
    >
      {task}
    </Button>
  );
};

export default Task;
