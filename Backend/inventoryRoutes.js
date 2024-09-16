const express = require('express');
const router = express.Router();
const { getAllInventory, createInventoryItem, updateInventoryItem } = require('../controllers/inventoryController');

//  all inventory items
router.get('/', getAllInventory);

// new inventory item
router.post('/', createInventoryItem);

router.patch('/:id', updateInventoryItem);

module.exports = router;
