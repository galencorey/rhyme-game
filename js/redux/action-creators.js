import {NEW_WORD} from './constants';
import axios from 'axios';

export const setWord = (word) => {
  return {type: NEW_WORD, word};
}

export const fetchWord = () => {
  return function(dispatch, getState){
    //dispatch(setWord('parrot'))
     axios.get('http://randomword.setgetgo.com/get.php')
     .then(word => {
        console.log(word)
     })

  }
}
