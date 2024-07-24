import React from 'react';
import './styles.css';

const Note = ({ title, description, important }) => {
  return (
    <div className={`note ${important ? 'important' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Note;
