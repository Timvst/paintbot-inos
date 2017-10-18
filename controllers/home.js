const Template = require('../models/Template');
/**
* GET /
* Home page, with inos parameters ?id= &title=
*/
exports.index = (req, res) => {
  const sessionData = req.session;

  if (!req.session.inosStoryId) {
    sessionData.inosStoryId = req.query.id;
    sessionData.inosStoryTitle = req.query.title;
  };

  if (!req.session.inosStoryId) {
    req.flash('errors', { msg: 'Geen iNOS-verhaal bekend. Vul de ontbrekende gegevens in' })
    res.redirect('/inos')
  } else {
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
  }

};


exports.getInos = (req, res) => {
  res.render('inos', {
    title: 'Vul iNOS-gegevens in',
  });
};

exports.postInos = (req, res) => {
  if (!req.body.id) {
    req.flash('errors', { msg: 'Geen iNOS-verhaal bekend. Vul de ontbrekende gegevens in' })
    res.redirect('/inos')
  } else {
    res.redirect('/?id='+req.body.id+'&title='+req.body.title)
  }
}
