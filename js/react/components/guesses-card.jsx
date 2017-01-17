import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import {centeredDiv, padding, inline, lightBlue, loneButton, pinkInline} from '../styles';
import {seeAnswers} from '../../redux/action-creators'

const GuessCard = ({rhymes, guesses, answers, seeAnswers, isShowAnswers}) => {

  return (
          <div style={centeredDiv}>
          <div style={loneButton}>
          <RaisedButton label="see all" secondary={true} onClick={seeAnswers} disabled={isShowAnswers} />
          </div>
           <Card style={padding}>
              <CardHeader
              title={`You have found ${guesses.length}/${rhymes.length} rhymes`}
              style={lightBlue}/>
              {guesses.map((guess, i)=>{
                return <Chip style={inline} key={i}>{guess}</Chip>
              })}
              {isShowAnswers ?
                answers.map((word, i) => {
                  return <Chip style={pinkInline} key={i}>{word}</Chip>
                })
                : null
              }

            </Card>
          </div>)
}

const mapStateToProps = (state) => ({rhymes: state.rhymes, guesses: state.guesses, newestGuess: state.newestGuess, answers: state.answers, isShowAnswers: state.isShowAnswers});
const mapDispatchToProps = {seeAnswers};

export default connect(mapStateToProps, mapDispatchToProps)(GuessCard);
