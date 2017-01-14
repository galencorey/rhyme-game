import React, {Component} from 'react';
import RandomWordContainer from './components/random-word.jsx';

export default class Main extends Component {
  render(){
    return (
      <div>
        <h1>The React is still Rendering!!!</h1>
        <RandomWordContainer />
      </div>
    )

  }
}


