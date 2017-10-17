
const Template = require('../models/Template');

exports.getForm = (req, res) => {
  res.render('template/edit', {
    title: 'Add Template',
  });
};

exports.postForm = (req, res) => {
  const template = new Template(req.body);
  template.save((err) => {
      if (err) {
        req.flash('errors', { msg: err.message });
        return res.redirect('/');
      } else {
        req.flash('success', { msg: 'Template has been saved successfully' });
        res.redirect('/');
      }
  });
};
