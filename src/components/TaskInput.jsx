import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => setNewTask(event.target.value);

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      addTask(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="შეიყვანეთ ახალი დავალება"
      />
      <button onClick={handleAdd}>დამატება</button>
    </div>
  );
};

export default TaskInput;
