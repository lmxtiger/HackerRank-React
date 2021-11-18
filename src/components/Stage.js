import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Input,
  Box,
  Avatar,
} from "@material-ui/core/";
import BackwardIcon from "@mui/icons-material/ArrowBack";
import ForwardIcon from "@mui/icons-material/ArrowForward";
// import { ArrowBackIcon as BackwardIcon, ArrowForwardIcon as ForwardIcon} from '@mui/icons-material';
import Task from "./Task.js";
import { StateContext } from "../controllers/state.context";

import useStyles from "./Stage_styles";

const Stage = ({ idx }) => {
  const { stage, header, moveBtns, tasksBlock, addTaskRow, button } =
    useStyles();

  const { stages, stageTasks, setstageTasks, taskToMove, settaskToMove } =
    useContext(StateContext);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showMoveBtns, setShowMoveBtns] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [buttonText, setButtonText] = useState("Add Task");

  const [stage_name, tasks] = [stages[idx], stageTasks[idx]];

  const handleAddTask = () => {
    if (newTask) {
      let new_stageTasks = [...stageTasks];
      new_stageTasks[idx].push(newTask);
      setstageTasks(new_stageTasks);
      // Handle clean-up
      setShowAddTask(false);
    }
  };

  const handleMove = (f) => {
    if (Array.isArray(taskToMove) && taskToMove.length === 2) {
      const [stageIdx, taskIdx] = taskToMove;
      let new_stageTasks = [...stageTasks];
      const [taskName] = new_stageTasks[stageIdx].splice(taskIdx, 1);
      const newStageIdx = stageIdx + (f ? 1 : -1);
      new_stageTasks[newStageIdx].push(taskName);
      setstageTasks(new_stageTasks);
      // Make move buttons disappear after forwarding/backwarding a task
      // Make the moved task shine for 3 sec in its new position
      settaskToMove([newStageIdx, stageTasks[newStageIdx].length - 1]);
      setTimeout(() => settaskToMove([-1, -1]), 3000);
    } else {
      window.alert(`Input Task Pos Wrong: ${taskToMove}`);
    }
  };

  const MoveBtns = ({ f = true, b = true }) => {
    if (idx === 0) {
      b = false;
    }
    if (idx === 4) {
      f = false;
    }

    return (
      <Box className={moveBtns} border={2}>
        {b ? (
          <Button
            startIcon={<BackwardIcon />}
            color="secondary"
            variant="contained"
            onClick={() => handleMove(false)}
          >
            Backward
          </Button>
        ) : null}
        {f ? (
          <Button
            endIcon={<ForwardIcon />}
            color="secondary"
            variant="contained"
            onClick={() => handleMove(true)}
          >
            Forward
          </Button>
        ) : null}
      </Box>
    );
  };

  // Side effects
  useEffect(() => {
    setButtonText(showAddTask ? "Cancel" : "Add Task");
    if (showAddTask) {
      settaskToMove([-1, -1]);
    }
  }, [settaskToMove, showAddTask]);
  useEffect(() => {
    setShowMoveBtns(taskToMove[0] === idx);
  }, [idx, taskToMove]);

  return (
    <Card className={stage}>
      <CardHeader
        title={stage_name}
        subtitle={`# of tasks: ${tasks.length}`}
        avatar={<Avatar src="../logo.svg" alt="logo" />}
      />
      {showMoveBtns ? <MoveBtns /> : null}

      <CardContent className={tasksBlock}>
        {tasks.map((task, idx_in_stage) => {
          const data = {
            task,
            taskPos: [idx, idx_in_stage],
          };
          return <Task data={data} disabled={showAddTask} />;
        })}
        {showAddTask ? (
          <Box className={addTaskRow}>
            <Input
              placeholder="New Task Here"
              onChange={(e) => setNewTask(e.target.value)}
              autoFocus
            />
            <Button
              onClick={handleAddTask}
              color="secondary"
              variant="contained"
            >
              Confirm
            </Button>
          </Box>
        ) : null}
      </CardContent>

      <Button
        onClick={() => setShowAddTask(!showAddTask)}
        className={button}
        color="primary"
        variant="contained"
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default Stage;
