import React from 'react';
import {connect} from 'react-redux';
import {fetchWord} from '../../redux/action-creators';
import RaisedButton from 'material-ui/RaisedButton';

const RandomWord = ({fetchWord, word}) => {
  return(<div>
          <RaisedButton label="Play" primary={true} onClick={fetchWord} />
          <p>{word}</p>
        </div>)
}

const mapStateToProps = (state) => ({word: state.word});
const mapDispatchToProps = (dispatch) => ({});

// export RandomWord;
export default connect(mapStateToProps, {fetchWord})(RandomWord);
