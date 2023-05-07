const express = require('express');
const ROUTE = express.Router();
const inventoryController = require('../../controller/inventory')

ROUTE.get('/get-inventory',inventoryController.getInventory)
ROUTE.get('/get-inventory-by-id',inventoryController.getInventoryById)
ROUTE.post('/create-inventory',inventoryController.createInventory)
ROUTE.post('/update-inventory',inventoryController.updateInventory)
ROUTE.post('/delete-inventory',inventoryController.deleteInventory)




module.exports = ROUTE
