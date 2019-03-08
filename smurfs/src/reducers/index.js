/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  REQUEST_START,
  REQUEST_FAILURE,
  GET_SUCCESS,
  ADD_SUCCESS,
  DELETE_SUCCESS
} from '../actions';

const initialState = {
  smurfs: [],
  busy: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        busy: true
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        busy: false,
        error: action.error
      };
    case GET_SUCCESS:
      return {
        ...state,
        busy: false,
        error: null,
        smurfs: action.smurfs
      };
    case ADD_SUCCESS:
      return {
        ...state,
        busy: false,
        error: null,
        smurfs: action.smurfs
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        busy: false,
        error: null,
        smurfs: action.smurfs
      };
    default:
      return state;
  }
};
