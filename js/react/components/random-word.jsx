import React from 'react';
import {connect} from 'react-redux';
import {fetchWord} from '../../redux/action-creators';
import RaisedButton from 'material-ui/RaisedButton';
import {textStyles} from '../styles';

const RandomWord = ({fetchWord, word}) => {
  return(<div>
          { word? null: <h2 style={textStyles}>Are you a rhyme master?</h2>}
          <RaisedButton label="Play" primary={true} onClick={fetchWord} />
          <p style={textStyles} >{word}</p>
        </div>)
}

const mapStateToProps = (state) => ({word: state.word});
const mapDispatchToProps = (dispatch) => ({});

// export RandomWord;
export default connect(mapStateToProps, {fetchWord})(RandomWord);
