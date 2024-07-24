import React, { useState } from 'react';
import './styles.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert('Por favor, ingresa una descripción para la nota.');
      return;
    }

    const newNote = {
      title,
      description,
      important,
    };

    addNote(newNote);

    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    <center>
      <form className="note-form" onSubmit={handleSubmit}>
        <div className='content-form'>
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese el Titulo De su Nota!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id='textares'
            className="form-control"
            placeholder="Ingrese la Descripcion de Su Nota"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label className="form-label">
            Importante!
            <input
              type="checkbox"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
          </label>
          <button className="btn btn-primary" type="submit">Agregar Nota</button>
        </div>
      </form>
    </center>
  );
};

export default NoteForm;
