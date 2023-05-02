const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefs.json')

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello')
})


app.get('/chefs', (req, res) => {
    res.send(chefsData)
})



app.listen(port, () => {
    console.log(`This server is running on port ${port}`)
})