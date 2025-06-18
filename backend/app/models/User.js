const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  company: { type: String },
  isAgency: { type: Boolean, default: false },
}, {
  timestamps: true 
});

module.exports = mongoose.model("User", userSchema);
