var db = require('../db');
var md5 = require('md5');
module.exports.login = (req,res) => {
    res.render('auth/login.pug', {
    });
}
module.exports.postLogin = (req,res) => {
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({email:email}).value();
    if(!user){
        res.render('auth/login', {
            errors:[
                'username not found'
            ],
            values: req.body
        });
        return;
    }
    var hashPassword = md5(password)

    if(user.password !== hashPassword) {
        res.render('auth/login', {
            errors:[
                'Password not correct!'
            ],
            values: req.body
        });
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
}
