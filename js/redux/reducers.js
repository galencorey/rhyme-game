import {NEW_WORD, ADD_GUESS} from './constants';

const initialState = {word: '', guesses: [], rhymes: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: action.word, rhymes: action.rhymes, guesses: [] });
  case ADD_GUESS:
      console.log("STATE.GUESSES", state.guesses)
      let totalGuesses = [...state.guesses, action.guess];
      return Object.assign({}, state, {guesses: totalGuesses});
  default:
     return state;
  }
}
export default reducer;
