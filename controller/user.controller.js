var db = require('../db');
var shortid = require('shortid');
module.exports.index = (req,res) => {
    res.render('user/user.pug', {
        users: db.get('users').value()
    });
}
module.exports.search = (req,res) => {
    var q = req.query.q;
    var matchedUser = db.get("users").value().filter(function(user){
        return user.name.indexOf(q) !== -1;
    })
    res.render('user/user.pug', {
        users: matchedUser
    });
}
module.exports.create = (req,res) => {
    // console.log(req.cookies);
    res.render('user/create.pug');
}

module.exports.get = (req, res) => {
    var id = req.params.id;   
    var user = db.get('users').find({ id: id }).value();
    res.render('user/view.pug',{
        user: user
    });
}

module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate()
    db.get("users").push(req.body).write();
    res.redirect('/users')
}