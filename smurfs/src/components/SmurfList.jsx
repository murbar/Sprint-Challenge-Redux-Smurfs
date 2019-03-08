import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

import Smurf from './Smurf';

const SmurfList = ({ smurfs, deleteSmurf }) => {
  const handleDelete = smurfId => {
    deleteSmurf(smurfId);
  };

  return (
    <div className="Smurfs">
      <h2>Smurfs Directory</h2>
      {smurfs.map(smurf => {
        return <Smurf attrs={smurf} onDelete={handleDelete} key={smurf.id || 0} />;
      })}
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfList);
