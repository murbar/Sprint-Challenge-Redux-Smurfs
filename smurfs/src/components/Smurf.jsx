import React from 'react';

const Smurf = props => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Smurf;
