import React from 'react';
import {connect} from 'react-redux';

const RandomWord = () => {
  return <h4>rAnDoM wOrD</h4>
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

// export RandomWord;
export default connect(mapStateToProps, mapDispatchToProps)(RandomWord);
