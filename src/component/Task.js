import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, toggle_rem }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggle_rem(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    
    </div>
  );
};

export default Task;
