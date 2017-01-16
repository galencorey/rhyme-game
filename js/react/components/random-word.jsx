import React from 'react';
import {connect} from 'react-redux';
import {fetchWord} from '../../redux/action-creators';
import RaisedButton from 'material-ui/RaisedButton';
import {textStyles, centeredDiv} from '../styles';

const RandomWord = ({fetchWord, word}) => {
  return(<div style={centeredDiv}>
          { word? null: <h2 style={textStyles}>Are you a rhyme master?</h2>}
          <RaisedButton label={word? "New Word": "Play"} primary={true} onClick={fetchWord} />
          <h3 style={textStyles}>{word}</h3>
        </div>)
}

const mapStateToProps = (state) => ({word: state.word});
const mapDispatchToProps = {fetchWord};

// export RandomWord;
export default connect(mapStateToProps, mapDispatchToProps)(RandomWord);
