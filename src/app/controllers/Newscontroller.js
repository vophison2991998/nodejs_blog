class Newscontroller {
  //[get]/news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('news DETAIL');
  }
}
module.exports = new Newscontroller();
