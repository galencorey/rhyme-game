import React from 'react';
import {connect} from 'react-redux';
import {fetchWord} from '../../redux/action-creators';

const RandomWord = ({fetchWord, word}) => {
  return(<div>
          <button onClick={fetchWord}>Play</button>
          <p>{word}</p>
        </div>)
}

const mapStateToProps = (state) => ({word: state.word});
const mapDispatchToProps = (dispatch) => ({});

// export RandomWord;
export default connect(mapStateToProps, {fetchWord})(RandomWord);
