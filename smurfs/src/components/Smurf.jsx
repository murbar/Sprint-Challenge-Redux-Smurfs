import React from 'react';

const Smurf = ({ attrs, onDelete }) => {
  const handleDelete = () => {
    onDelete(attrs.id);
  };
  return (
    <div className="Smurf">
      <h3>{attrs.name}</h3>
      <strong>{attrs.height} tall</strong>
      <p>{attrs.age} smurf years old</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Smurf;
