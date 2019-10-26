var express = require('express');
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middle_ware/auth.middleware');
var multer = require('multer');

var upload = multer({ dest:'./public/uploads'});
var router = express.Router();

router.get('/',controller.index);

router.get('/cookie',authMiddleware.requireAuth, function(req,res,next){
    res.cookie('user-id', 123123);
    res.send("ok!");
})
router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create',
                upload.single('avatar'),
                validate.postCreate, 
                controller.postCreate
);

module.exports = router;
