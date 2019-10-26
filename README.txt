LEARN NODEJS-EXPRESS BY MYSELF

# Lesson1:
- setup enviroment Ex+Nodejs , request, response , res.send, res.render
- set view engine: pugjs,

# Lesson2:
- Query parameters: req.query /user/search?para=value&something else
- local/session storage
- Post method : req.body, res.redirect, form post 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
- Keyword: name attribute in form

# Lesson3:
- nodemon : npm install --save-dev nodemon
- package.json -> script -> add : "start":"name sever"

# Lesson4: (low database)
- setup npm lowdb
- learn lowdb : C,R,U,D

# Lesson5: 
- Consitute + using view in ExpressJs

# Lesson6: Express Router + research about Controller(MVC)
- Directional URL with Express Router
- Ctrl+Shift+L change many word 1 time :)
- Controller

# Lesson7: 
- include Bootstrap pugjs
- using public file css,js,img,...

# Lesson8: Server validation + Middleware
- set the rule for input
- Middleware : function called when using http method or validation....etc(bodyparse, cookie-parse,...)
- require middleware which install bt npm in server file
- Can be store variable or something by using res.locals among middleware function

# Lesson9: Cookie + Authentication 
- Cookie: server send cookie, browser save and send to the serser when request
- Application cookie: login,.... 
- Authentication: using cookies.
- MD5 encode & security
- Handle user can be change the cookies on browser(Signed cookie)

# Lesson10: Enviroment variable
- protect secretkey or something canot show git, github,etc...
- console.log(process.env): show all enviroment variable 
- create an enviroment variable : in terminal : {name}={value} + npm start
- npm dotenv

# Lesson11: Debug Nodejs app
- Add debugger: go to package.json -> start -> nodemon --inspect index.js

# Lesson12: Pagination

# Lesson13: Upload file
- step 1 change Html <form> enctype attribute 
- middleware: express-multer

# Lesson14: Session





