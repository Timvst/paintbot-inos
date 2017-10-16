const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String },
  maxTextfields: { type: String },
  maxCharacters: { type: String },
  maxImages: { type: String },
  instructions: { type: String },
  renderSettings: { type: String }
}, { timestamps: true });




const template = mongoose.model('template', templateSchema);

module.exports = template;
