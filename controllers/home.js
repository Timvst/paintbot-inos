/**
 * GET /
 * Home page, with inos parameters ?id= &title=
 */
exports.index = (req, res) => {
  var sessionData = req.session;
  sessionData.inosStoryId = req.param('id');
  sessionData.inosStoryTitle = req.param('title');
  res.render('home', {
    title: 'Home',
  });
};
