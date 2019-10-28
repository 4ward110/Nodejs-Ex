require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');
var apiProductsRoute = require('./api/routes/product.route');

var authMiddleware = require('./middle_ware/auth.middleware');
var sessionMiddleware = require('./middle_ware/session.middleware');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(process.env.SESSION_SECRET));  
app.use(sessionMiddleware);
// app.use(csurf({ cookie:true }));        

app.use(express.static('public'));


app.get('/',(req,res) => {
    res.render('index', {
        name: 'Mr.A'
    });
});
app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer',authMiddleware.requireAuth, transferRoute);
app.use('/api/products', apiProductsRoute);

app.listen(port, () => {
    console.log('success!!!');
});