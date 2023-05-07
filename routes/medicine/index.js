const express = require('express');
const ROUTE = express.Router();
const medicineController = require('../../controller/medicine')

ROUTE.get('/get-medicine',medicineController.getMedicine)
ROUTE.get('/get-medicine-by-id',medicineController.getMedicineById)
ROUTE.post('/create-medicine-data',medicineController.createMedicineData)
ROUTE.post('/update-medicine', medicineController.updateMedicine)
ROUTE.post('/delete-medicine',medicineController.deleteMedicine)


module.exports = ROUTE
