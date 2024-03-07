const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverrride = require('method-override') ;
const route = require('./routes');
const db = require('./config/db');

//Conect DB
db.connect();

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
//http loger
// app.use(morgan('combined'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//templates engine handlesbar
app.engine(
  'hbs',
  handlebars.engine({
    extname: 'hbs',
    helpers:{
      sum:(a,b)=> a+b,
    }
  })
);
app.set('view engine', 'hbs'); // rut gon duoi .handlesbars
//end templates

app.set('views', path.join(__dirname, 'resources','views'));
app.use(methodOverrride('_method'));

//Route init 
route(app);

// port localhost
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
