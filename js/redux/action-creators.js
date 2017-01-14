import {NEW_WORD} from './constants';
import axios from 'axios';

export const setWord = (word) => {
  return {type: NEW_WORD, word};
}

export const fetchWord = () => {
  return function(dispatch, getState){
    dispatch(setWord('parrot'))
     //fetch word from API
     //.then(word => dispatch(setWord(word)))
     //might be res.data
  }
}
