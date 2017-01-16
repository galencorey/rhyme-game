import {NEW_WORD, ADD_GUESS} from './constants';

const initialState = {word: '', guesses: [], rhymes: [], newestGuess: ''};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: action.word, rhymes: action.rhymes, guesses: [] });
  case ADD_GUESS:
      console.log("STATE.GUESSES", state.guesses)
      let totalGuesses = state.guesses;
      if (state.rhymes.includes(action.guess)){
        totalGuesses.push(action.guess);
      }
      return Object.assign({}, state, {guesses: totalGuesses, newestGuess: action.guess});
  default:
     return state;
  }
}
export default reducer;
