import React, { Component } from 'react';

import Smurf from './Smurf';

const SmurfList = ({ smurfs }) => {
  return (
    <div className="Smurfs">
      <h2>Smurfs Directory</h2>
      {smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            // onDelete={onDelete}
            key={smurf.id}
          />
        );
      })}
    </div>
  );
};

export default SmurfList;
