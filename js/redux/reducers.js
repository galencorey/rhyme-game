import {NEW_WORD, ADD_GUESS} from './constants';

const initialState = {word: '', guesses: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: action.word, rhymes: action.rhymes });
  case ADD_GUESS:
      let totalGuesses = [...state.guesses, ...action.guesses];
      return Object.assign({}, state, {guesses: totalGuesses});
  default:
     return state;
  }
}
export default reducer;
