const express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

const port = 3000;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req,res) => {
    res.render('index', {
        name: 'Mr.A'
    });
});

app.use('/users', userRoute);

app.listen(port, () => {
    console.log('success!!!');
});