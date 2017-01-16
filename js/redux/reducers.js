import {NEW_WORD} from './constants';

const initialState = {word: ''};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: action.word, rhymes: action.rhymes });
  default:
     return state;
  }
}
export default reducer;
