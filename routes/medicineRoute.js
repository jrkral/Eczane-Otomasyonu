const express = require('express');
const medicineController = require('../controllers/medicineController');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(medicineController.getAllMedicine);
router.route('/ilac-ekle').get(pageController.getMedicineAddPage);
router.route('/ilac-ekle').post(medicineController.createMedicine);
router.route('/edit/:id').get(pageController.getEditMedicinePage);
router.route('/:id').put(medicineController.getEditMedicine);

module.exports = router;
