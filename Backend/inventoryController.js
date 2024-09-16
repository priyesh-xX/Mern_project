const Inventory = require('../models/inventoryModel');


exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// new inventory item
exports.createInventoryItem = async (req, res) => {
  try {
    const { productName, stockQuantity, supplier, reorderLevel, lastOrderDate } = req.body;
    const inventoryItem = new Inventory({
      productName,
      stockQuantity,
      supplier,
      reorderLevel,
      lastOrderDate
    });
    await inventoryItem.save();
    res.status(201).json(inventoryItem);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// inventory item
exports.updateInventoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const inventoryItem = await Inventory.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(inventoryItem);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
