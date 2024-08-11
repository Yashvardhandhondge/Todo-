import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 mb-4 ${task.completed ? 'bg-green-100' : ''}`}>
      <div className="flex justify-between items-center">
        <h3 className={`text-lg font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-gray-500 text-sm">Created at: {new Date(task.createdAt).toLocaleDateString()}</p>
      <button
        onClick={() => onToggle(task._id)}
        className={`mt-2 text-sm ${task.completed ? 'text-yellow-500' : 'text-green-500'}`}
      >
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
    </div>
  );
};

export default Task;
