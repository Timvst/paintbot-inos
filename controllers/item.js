
const Item = require('../models/Item');

exports.getForm = (req, res) => {
  res.render('item/edit', {
    title: 'Add Item',
    inosStoryTitle: req.session.inosStoryTitle,
    inosStoryId: req.session.inosStoryId,
    template: req.params.template
  });
};

exports.postForm = (req, res) => {
  const item = new Item(req.body);
  item.save((err) => {
      if (err) {
        req.flash('errors', { msg: err.message });
        return res.redirect('/');
      } else {
        req.flash('success', { msg: 'Item has been saved successfully' });
        res.redirect('/');
      }
  });
};

exports.getItems = (req, res) => {
  Item.find()
  .exec(function (err, list_items) {
    if (err) {
      return next(err);
    } else {
      res.render('item/list', {
        title: 'Items',
        items: list_items,
      });
    }
  });
}
