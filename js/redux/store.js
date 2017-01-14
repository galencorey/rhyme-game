import {createStore} from 'redux';
import reducer from './reducers.js';
console.log("im a reducer", reducer)

export default createStore(reducer);
