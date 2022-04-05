const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/notlar').get(pageController.getNotesPage);
router.route('/yazdir').get(pageController.getProforma);


module.exports = router;
