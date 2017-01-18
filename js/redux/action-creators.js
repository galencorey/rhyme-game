import {NEW_WORD, ADD_GUESS, SEE_ANSWERS} from './constants';
import axios from 'axios';

export const setWord = (word, rhymes) => {
  return {type: NEW_WORD, word, rhymes};
}

export const addGuess = (guess) => {
  return {type: ADD_GUESS, guess}
}

export const seeAnswers = () => {
  return {type: SEE_ANSWERS}
}

export const fetchWord = () => {
  return function(dispatch, getState){
     return axios.get('/newword')
     .then(response => {
        dispatch(setWord(response.data.word, response.data.rhymes))
     })
     .catch(err => console.log(err))
  }
}

