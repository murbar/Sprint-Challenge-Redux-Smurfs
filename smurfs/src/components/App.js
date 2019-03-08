import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';
import './App.css';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    const { busy, error, smurfs } = this.props;
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {busy && <div>Loading...</div>}
        <SmurfForm />
        <SmurfList smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    busy: state.busy,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
