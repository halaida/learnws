const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicantionsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.post('/applications', ApplicantionsController.store);

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;