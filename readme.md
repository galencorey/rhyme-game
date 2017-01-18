##Rhyme Game
***
####Warning: this game relies on the Words API for all its rhyming. You, as a human, are probably better at rhyming than the Words API.

The Rhyme Game is built with React and Redux, and takes advantage of the react-redux library. All its stylishness is thanks to Material UI. It is, in most places, as ES6y as possible.

In this small app, all components are defined as functions with no internal state, and use the connect function from react-redux to connect to a redux store.

There is a small express server that serves the homepage and has static routing to the js file.
It has one additional route that makes an API call to the words API. It makes this request as many times as it needs to to get a word with rhymes (since the words API does not guarantee a word with rhymes).

The store uses a single reducer, which handles fetching a new word and its rhymes, and processing a user's guesses. The words and rhymes come from the Words API. The API call is made using the axios library. Redux-thunk middleware allows for an asynchronous action creator that makes the API call. The fetchWord action creator is async - it makes a call to the express server and then calls getWord, which is a synchronous action creator.

When a user enters a guess, it is passed from the rhyme-guesser component to the reducer, which checks to see if the guess is included in the rhymes for the current word, and then displays or does not display the guess accordingly.

The guesses-card component knows nothing about the choosing of the word or the guessing, it simply displays what it is told to display. It also includes a button that will reveal all the rhymes that the user has not yed guessed. It does this by dispatching an action that causes the reducer to diff the guessed rhymes and the full list of rhymes from the API, and send the unguessed rhymes back to the component to display.
