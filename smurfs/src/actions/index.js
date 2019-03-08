/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

const endpoint = 'http://localhost:3333/smurfs';

export const BUSY = 'BUSY';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: BUSY });
  axios
    .get(endpoint)
    .then(({ data }) => {
      dispatch({ type: GET_SUCCESS, smurfs: data });
    })
    .catch(err => {
      dispatch({ type: GET_FAILURE, error: err });
      console.log(err);
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: BUSY });
  axios
    .post(endpoint, smurf)
    .then(({ data }) => {
      dispatch({ type: ADD_SUCCESS, smurf: data });
    })
    .catch(err => {
      const msg = err.response.data.Error;
      dispatch({ type: ADD_FAILURE, error: msg });
    });
};
