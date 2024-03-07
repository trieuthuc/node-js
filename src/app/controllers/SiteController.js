const { mutipleMongooseToObject } = require('../../ultill/mongoose');
const Course = require('../models/Course');

class SiteController {
  index(req, res,next) {
    // lấy dữ liệu ra từ database
    Course.find({})
      .then(courses => {
        res.render('home',{courses : mutipleMongooseToObject( courses)
        });
      })
      .catch(next);
      //end lấy dữ liệu 
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();