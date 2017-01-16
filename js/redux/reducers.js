import {NEW_WORD, ADD_GUESS, SEE_ANSWERS} from './constants';

const initialState = {word: '', guesses: [], rhymes: [], newestGuess: '', showAnswers: false, answers: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: action.word, rhymes: action.rhymes, guesses: [], showAnswers: false });
  case ADD_GUESS:
      console.log("STATE.GUESSES", state.guesses)
      let totalGuesses = state.guesses;
      if (state.rhymes.includes(action.guess)){
        totalGuesses.push(action.guess);
      }
      return Object.assign({}, state, {guesses: totalGuesses, newestGuess: action.guess});
  case SEE_ANSWERS:
      const answers = state.rhymes.filter(rhyme => !state.guesses.includes(rhyme));
      return Object.assign({}, state, {showAnswers: true, answers});
  default:
     return state;
  }
}
export default reducer;
