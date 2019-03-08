import React, { useState } from 'react';
import { addSmurf } from '../actions';

const SmurfForm = props => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(values);
    setValues({});
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }));
  };

  return (
    <div className="SmurfForm">
      <h2>Add a Smurf</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={values.name || ''}
          name="name"
        />
        <input onChange={handleInputChange} placeholder="age" value={values.age || ''} name="age" />
        <input
          onChange={handleInputChange}
          placeholder="height"
          value={values.height || ''}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
