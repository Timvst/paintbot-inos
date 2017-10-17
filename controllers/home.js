const Template = require('../models/Template');
/**
 * GET /
 * Home page, with inos parameters ?id= &title=
 */
exports.index = (req, res) => {
  req.session.inosStoryId = req.query.id;
  req.session.inosStoryTitle = req.query.title;

  Template.find({}, 'name instructions')
  .exec(function (err, list_templates) {
    if (err) {
      return next(err);
    } else {
      res.render('home', {
        title: 'Home',
        templates: list_templates,
        inosStoryTitle: req.session.inosStoryTitle
      });
    }
  });
};
