const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const passport = require('passport');
const session = require("express-session");
const multiparty = require('connect-multiparty');
multipartyMiddleware = multiparty();

const router = require('./server/routers');

let app = express();


mongoose.connect('mongodb://root:root@ds145138.mlab.com:45138/transactions');

app.use(express.static(path.join(__dirname , '/client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/',router);

app.listen(3000,function(){
    console.log("Server is started at 3000 port");
})