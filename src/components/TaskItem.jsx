import React from "react";

const TaskItem = ({ task, index, onTaskAction, actionLabel, onDelete }) => {
  return (
    <li>
      {task}{" "}
      <button onClick={() => onTaskAction(index)}>{actionLabel}</button>
      {onDelete && (
        <button onClick={() => onDelete(index)} style={{ marginLeft: "10px" }}>
          წაშლა
        </button>
      )}
    </li>
  );
};

export default TaskItem;
