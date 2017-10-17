
const Item = require('../models/Item');

/**
 * GET /api/items
 * List of API examples.
 */

exports.getItems = (req, res, next) => {
	Item.find()
		.exec(function(err, items) {
		if (err) {
						console.log('Error loading items', err);
					}
		if (items) {
			res.json(items)
		}

	});
};
