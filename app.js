const express = require ('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const theList = [
    {
        id: 'John', 
        TODO: [
            'something'
        ],
    },
];

// MiddleWare parses json format request 
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Logs requests to console 
app.use(logger('dev'));

require('./app/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'HELLO HAYDEN MILLER',
}));

/*
app.post('/api', (req, res) => {
    if (!req.body.id || req.body.id < 2)
    {
        res.status(400).send("Name is required and minimum 3 characters"); 
        return;
    }
    
    const list = {
        id: req.body.id,
        TODO: req.body.TODO
    };
    
    theList.push(list);

    res.send(theList);
    console.log(theList);
    res.status(204);
}) */



app.listen(port, () => {

    console.log("WE ARE LIVE AT PORT " + port);

})

module.exports = app;



