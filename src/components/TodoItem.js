import React from 'react';

export const TodoItem = ({ title, date }) => {
  return (
    <div className="container">
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
};
