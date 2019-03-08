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

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const getSmurfs = () => dispatch => {
  dispatch({ type: REQUEST_START });
  axios
    .get(endpoint)
    .then(({ data }) => {
      dispatch({ type: GET_SUCCESS, smurfs: data });
    })
    .catch(err => {
      dispatch({ type: REQUEST_FAILURE, error: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: REQUEST_START });
  axios
    .post(endpoint, smurf)
    .then(({ data }) => {
      dispatch({ type: ADD_SUCCESS, smurf: data });
    })
    .catch(err => {
      const msg = err.response.data.Error;
      dispatch({ type: REQUEST_FAILURE, error: msg });
    });
};
