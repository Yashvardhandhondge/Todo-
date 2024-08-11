import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Please add a task title');
      return;
    }
    onAdd({ title, description, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="mb-4" onSubmit={onSubmit}>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
