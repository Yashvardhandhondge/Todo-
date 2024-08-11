import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await axios.post('http://localhost:5000/api/tasks', task);
    setTasks([...tasks, res.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTaskCompletion = async (id) => {
    const taskToToggle = tasks.find((task) => task._id === id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </div>
  );
};

export default App;
