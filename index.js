require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');

var authMiddleware = require('./middle_ware/auth.middleware');

const port = 3000;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req,res) => {
    res.render('index', {
        name: 'Mr.A'
    });
});

app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products',authMiddleware.requireAuth, productRoute);

app.listen(port, () => {
    console.log('success!!!');
});