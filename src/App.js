import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const taskToMove = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToMove]);
  };

  const moveBackToTodo = (index) => {
    const taskToMove = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setTasks([...tasks, taskToMove]);
  };

  const deleteTask = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="columns">
        <div className="column">
          <h2>შესასრულებელი დავალებები</h2>
          <TaskList
            tasks={tasks}
            onTaskAction={completeTask}
            actionLabel="დასრულება"
          />
        </div>
        <div className="column">
          <h2>შესრულებული დავალებები</h2>
          <TaskList
            tasks={completedTasks}
            onTaskAction={moveBackToTodo}
            actionLabel="გადატანა შესასრულებელში"
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
