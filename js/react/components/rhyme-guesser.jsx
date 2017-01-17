import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {centeredDiv} from '../styles';
import {addGuess} from '../../redux/action-creators';



const RhymeGuesser = ({word, addGuess, isShowAnswers}) => {

  const enterText = (evt) => {
    if (evt.key === 'Enter'){
      addGuess(evt.target.value);
      evt.target.value='';
    }
  }

  return (<div style={centeredDiv}>
            <TextField hintText={`enter a rhyme for ${word}`} onKeyPress={enterText} disabled={isShowAnswers} />
          </div>
          )
}

const mapStateToProps = (state) => ({word: state.word, isShowAnswers: state.isShowAnswers});
const mapDispatchToProps = {addGuess};

export default connect(mapStateToProps, mapDispatchToProps)(RhymeGuesser);
