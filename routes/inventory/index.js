const express = require('express');
const ROUTE = express.Router();
const inventoryController = require('../../controller/inventory')

ROUTE.get('/get-medicine',inventoryController.getInventory)
ROUTE.post('/create-inventory',inventoryController.createInventory)




module.exports = ROUTE
