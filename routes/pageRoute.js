const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/borclular').get(pageController.getDebtPage);
router.route('/borc-ekle').get(pageController.getDebtAddPage);

module.exports = router;
