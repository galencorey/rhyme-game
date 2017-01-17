import {NEW_WORD, ADD_GUESS, SEE_ANSWERS} from './constants';
import axios from 'axios';
// Development only:
// import { wordsAPIKey } from '../../keys';
// Production only:
const wordsAPIKey = process.env.wordsAPIKey;
console.log("api key", wordsAPIKey);
console.log("env", process.env);


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

  const herokuOptions ={
    headers: {
      "Accept": "application/vnd.heroku+json; version=3"
    }
  }

  return function(dispatch, getState){

     return axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&soundsMax=4', options)
     .then(response => {
        return axios.get(`https://wordsapiv1.p.mashape.com/words/${response.data.word}/rhymes`, options)
     })
     .then(response => {
        let rhymes = [];
        for (let type in response.data.rhymes){
          rhymes = [...rhymes, ...response.data.rhymes[type]];
        }
        if (rhymes.length){
          dispatch(setWord(response.data.word, rhymes))
        } else {
          dispatch(fetchWord());
        }
     })
     .catch(err => console.log(err))
  }
}

