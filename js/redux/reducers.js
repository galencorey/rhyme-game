import {NEW_WORD} from './constants';

const initialState = {word: ''};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_WORD:
     return Object.assign({}, state, { word: 'parrot' });
  default:
     return state;
  }
}
console.log("typeof reducer", typeof reducer);
export default reducer;
