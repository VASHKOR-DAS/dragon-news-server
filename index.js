const express = require('express')
const app = express()
const cors = require('cors') // load data on other domain
const port = process.env.PORT || 5000;

app.use(cors());

// consume data
const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News API running');
});

// route anujayi data sent krr jnno
app.get('/news-categories', (req, res) => {
    res.send(categories);
});

// category wise khula, jehe2 category wise onk news thakbe tai filter kora hoise
app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    // jehe2 08 category te kono data nei tai 08 mane sob news data
    if (id === '08') {
        res.send(news);
    } else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
});

// id diye news khuja
app.get('/news/:id', (req, res) => {
    const id = req.params.id; // req.params means full object, params.id means sei id tai
    const selectedNews = news.find(n => n._id === id); //n means news, News.json theke find jotogulo News.json er vitor _id wala element ase
    res.send(selectedNews);
});











app.listen(port, () => {
    console.log("Dragon News Server running on port", port);
})