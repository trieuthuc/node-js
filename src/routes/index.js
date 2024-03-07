const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter =require('./couses') 
const meRouter=require('./me')
function route(app){
    
app.use('/news',newsRouter);
app.use('/me',meRouter)
app.use('/',siteRouter);
app.use('/courses',courseRouter);
  
}
module.exports = route;