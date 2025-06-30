const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.getSubjects);
router.post('/add', subjectController.addSubject);

module.exports = router;