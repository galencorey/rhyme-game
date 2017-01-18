const express = require('express');
const {resolve} = require('path');
const axios = require('axios');

const app = express()

/*Statically serve js files, serve homepage by default */
app.use(express.static('js'));
app.get('/', (req, res) => res.sendFile(resolve(__dirname, 'index.html')))

/* New Words Route makes a request to words API*/
app.get('/newword', (req, res) => {
  console.log("I HAVE HIT THE ROUTE")
  return getWordWithRhymes()
  .then(rhyme => res.send(rhyme))
})

/* This function will run as many times as it needs to to fetch a word with rhymes from words API */
const getWordWithRhymes = () => {
  const options = {headers: {
      'X-Mashape-Key': process.env.wordsAPIKey,
      'Accept': 'application/json'
  }}

  return axios.get('https://wordsapiv1.p.mashape.com/words/?random=true&soundsMax=4', options)
   .then(response => {
      return axios.get(`https://wordsapiv1.p.mashape.com/words/${response.data.word}/rhymes`, options)
   })
   .then(response => {
      let rhymes = [];
      for (let type in response.data.rhymes){
        rhymes = [...rhymes, ...response.data.rhymes[type]];
      }
      console.log("got some rhymes", rhymes)
      if (!rhymes.length){
        return getWordWithRhymes()
      } else {
        return {word: response.data.word, rhymes: rhymes};
      }
   })
   .catch(err => console.log(err))

}


app.listen(process.env.PORT || '3000')
