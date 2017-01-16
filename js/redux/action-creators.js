import {NEW_WORD} from './constants';
import axios from 'axios';
import { wordsAPIKey } from '../../keys';

export const setWord = (word, rhymes) => {
  return {type: NEW_WORD, word, rhymes};
}

export const fetchWord = () => {
  const options = {headers: {
      'X-Mashape-Key': wordsAPIKey,
      'Accept': 'application/json'
  }}

  return function(dispatch, getState){
     return axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&soundsMax=4', options)
     .then(response => {
        //dispatch(setWord(response.data.word))
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
