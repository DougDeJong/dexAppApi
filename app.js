require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

// post generator

// const dexcom      = require('dexcom-share2');
const http        = require('https');
const oauth2lib   = require('oauth20-provider');
const oauth2 = new oauth2lib( {log: {level: 2}})


mongoose
  .connect('mongodb://localhost/dexappapi', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Oauth Setup 

app.use(oauth2.inject());






// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Dexcom Setup
app.locals.dexID = process.env.DEXID;

app.locals.dexSEC = process.env.DEXSEC;

app.locals.dexURI = 'dejCom'
 
// const iterator = dexcom({
//   username: 'DEXCOM_SHARE_USERNAME',
//   password: 'DEXCOM_SHARE_PASSWORD'
// })
 
// while (true) {
//   const { done, value } = await iterator.next()
//   console.log(value)
  /*
  { DT: '/Date(1515095827000-0800)/',
    ST: '/Date(1515095827000)/',
    Trend: 4,
    Value: 123,
    WT: '/Date(1515095827000)/',
    Date: 1515095827000 }
  */
// }
// default value for title local
app.locals.title = 'dejCom historical data display';



const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);


module.exports = app;
