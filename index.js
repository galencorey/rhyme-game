const express = require('express')
const {resolve} = require('path')
const app = express()

console.log("filepath", resolve(__dirname, 'index.html'))

app.use(express.static('js'));
app.get('/', (_, res) => res.sendFile(resolve(__dirname, 'index.html')))
// app.get('/*', (_, res) => res.send("hello"))



app.listen(process.env.PORT || '3000')
