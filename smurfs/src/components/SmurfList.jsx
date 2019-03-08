import React, { Component } from 'react';

import Smurf from './Smurf';

const SmurfList = ({ smurfs }) => {
  return (
    <div className="Smurfs">
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
