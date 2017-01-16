import {NEW_WORD, ADD_GUESS, SEE_ANSWERS} from './constants';
import axios from 'axios';
import { wordsAPIKey } from '../../keys';

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
  const options = {headers: {
      'X-Mashape-Key': wordsAPIKey,
      'Accept': 'application/json'
  }}

  return function(dispatch, getState){
     return axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&soundsMax=4', options)
     .then(response => {
        return axios.get(`https://wordsapiv1.p.mashape.com/words/${response.data.word}/rhymes`, options)
     })
     .then(response => {
        console.log(response.data)
        let rhymes = [];
        for (let type in response.data.rhymes){
          rhymes = [...rhymes, ...response.data.rhymes[type]];
        }
        console.log("RHYMES", rhymes)
        dispatch(setWord(response.data.word, rhymes))
     })
     .catch(err => console.log(err))
  }
}
