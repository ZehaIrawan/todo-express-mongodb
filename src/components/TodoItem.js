import React from 'react';

export const TodoItem = ({ title, date, deleteTodo, id }) => {
  return (
    <div className="container">
      <p>{title}</p>
      <p>{date}</p>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
