const express = require('express');
var mysql = require('mysql');
var db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'cm_uat_offline'
});

db.connect();

const app = express();
app.use(express.json());

var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    },
    {
        id: 1,
        name: "Arrow",
        type: "series",
        isPublished: true
    },
    {
        id: 2,
        name: "Harry Potter",
        type: "movie",
        isPublished: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello Fucking World</h1>');
});

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/cm_test', (req, res) => {
    let sql = 'SELECT * FROM member';
    let query = db.query(sql, (err,results) => { 
        if(err) throw err;
        res.json(results);
    });
});

const port = process.env.PORT || 7000
app.listen(port, () => console.log(`Listening on port ${port}`) );