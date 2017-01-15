import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {centeredDiv} from '../styles';


const RhymeGuesser = () => {
  return (<div style={centeredDiv}>
            <TextField hintText="enter a rhyme" />
          </div>
          )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RhymeGuesser);
