class NewsController {
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send(' Thực đang học nodejs ');
  }
}
module.exports = new NewsController();
