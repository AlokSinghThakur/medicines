const express = require('express');
const ROUTE = express.Router();
const medicineController = require('../../controller/medicine')

ROUTE.get('/get-medicine',medicineController.getMedicine)
ROUTE.post('/create-medicine-data',medicineController.createMedicineData)


module.exports = ROUTE
