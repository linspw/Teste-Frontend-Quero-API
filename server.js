const express = require('express');
const data = require('./data.json');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.json(data);
});

app.listen(5000, ()=>{console.log("App listen port 5000")});