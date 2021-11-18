import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const stage_names = ["Undone", "Half Done", "Almost Done", "Done"];
  const init_tasks = [
    ["Task 1", "Task 2"],
    ["Task 3", "Task 4"],
    ["Task 5"],
    [],
  ];
  const [stages, setstages] = useState(stage_names);
  const [stageTasks, setstageTasks] = useState(init_tasks);
  const [taskToMove, settaskToMove] = useState([-1, -1]);

  return (
    <StateContext.Provider
      value={{
        stages,
        setstages,
        stageTasks,
        setstageTasks,
        taskToMove,
        settaskToMove,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
