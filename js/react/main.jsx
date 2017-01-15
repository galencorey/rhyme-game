import React, {Component} from 'react';
import RandomWordContainer from './components/random-word.jsx';
import RhymeGuesserContainer from './components/rhyme-guesser.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class Main extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <RandomWordContainer />
          <RhymeGuesserContainer />
        </div>
      </MuiThemeProvider>
    )

  }
}


