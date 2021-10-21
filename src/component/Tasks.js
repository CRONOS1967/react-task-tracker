import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggle_rem }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggle_rem={toggle_rem}
        />
      ))}
    </>
  );
};

export default Tasks;
