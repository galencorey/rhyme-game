import React, {Component} from 'react';
import {connect} from 'react-redux';
import RandomWordContainer from './components/random-word.jsx';
import RhymeGuesserContainer from './components/rhyme-guesser.jsx';
import GuessCardContainer from './components/guesses-card.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const Main = ({word}) => {

    return (
      <MuiThemeProvider>
        <div>
          <RandomWordContainer />
          {word ?
          <div><RhymeGuesserContainer />
          <GuessCardContainer /> </div>: null
          }
        </div>
      </MuiThemeProvider>
    )
}

const mapStateToProps = (state) => ({word: state.word})

export default connect(mapStateToProps)(Main)
