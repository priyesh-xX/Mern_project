const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productName: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  supplier: { type: String, required: true },
  reorderLevel: { type: Number, required: true },
  lastOrderDate: { type: Date, required: true },
  predictedDemand: { type: Number, default: 0 }
});

module.exports = mongoose.model('Inventory', inventorySchema);
