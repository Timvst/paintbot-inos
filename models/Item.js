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

itemSchema.virtual('title').get(function(){
  return this.inosStoryTitle + '-' + this.template + '-' + this.field1;
});

itemSchema.set('toObject', { virtuals: true });

const item = mongoose.model('item', itemSchema);

module.exports = item;
