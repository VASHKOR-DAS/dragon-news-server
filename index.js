const express = require('express')
const app = express()
const cors = require('cors') // load data on other domain
const port = process.env.PORT || 5000;

app.use(cors());

// consume data
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News API running');
});

// route anujayi data sent krr jnno
app.get('/news-categories', (req, res) => {
    res.send(categories);
});











app.listen(port, () => {
    console.log("Dragon News Server running on port", port);
})