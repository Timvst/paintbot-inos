const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  inosStoryId: { type: String },
  inosStoryTitle: { type: String },
  template: { type: String },
  field1: { type: String },
  field2: { type: String },
  field3: { type: String },
  field4: { type: String },
  field5: { type: String },
  field6: { type: String },
  field7: { type: String },
  field8: { type: String },
  field9: { type: String },
  field10: { type: String },
  renderStatus: { type: String }
}, { timestamps: true });




const item = mongoose.model('item', itemSchema);

module.exports = item;
