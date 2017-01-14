import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

console.log(document.getElementById('app'))

ReactDOM.render(<Provider><Main /></Provider>, document.getElementById('app'));
