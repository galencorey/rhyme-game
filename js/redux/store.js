import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
export default createStore(reducer, applyMiddleware(thunk, logger));
