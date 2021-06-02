const mongoose = require('mongoose');

const SitesSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    content: { type: String, required: true },
    images: { type: Array, required: false, defaultValue: [] },
  },
  {
    timestamps: true,
  }
);

SitesSchema.statics.getAll = async (filters = {}) => {
  const customers = await Sites.find(filters);
  return customers;
};

const Sites = mongoose.model('Sites', SitesSchema);
module.exports = Sites;
