import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';

console.log(document.getElementById('app'))

ReactDOM.render(<Provider store={store} ><Main /></Provider>, document.getElementById('app'));
