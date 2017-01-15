import React from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {centeredDiv, padding, inline, lightBlue} from '../styles';

const GuessCard = () => {
  return (
          <div style={centeredDiv}>
           <Card style={padding}>
              <CardHeader title="You have found 1/15 rhymes" style={lightBlue} />
              <Chip style={inline}>A Rhyme</Chip>
              <Chip style={inline}>A Rhyme</Chip>
              <Chip style={inline}>A Rhyme</Chip>
            </Card>
          </div>
          )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GuessCard);
