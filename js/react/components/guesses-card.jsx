import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {centeredDiv, padding, inline, lightBlue} from '../styles';

const GuessCard = ({rhymes, guesses}) => {
  return (
          <div style={centeredDiv}>
           <Card style={padding}>
              <CardHeader title={`You have found ${guesses.length}/${rhymes.length} rhymes`} style={lightBlue} />
              {guesses.map((guess, i)=>{
                return <Chip style={inline} key={i}>{guess}</Chip>
              })}
            </Card>
          </div>)
}

const mapStateToProps = (state) => ({rhymes: state.rhymes, guesses: state.guesses, newestGuess: state.newestGuess});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GuessCard);
