const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

router.get('/:subjectId', lessonController.getLessons);
router.post('/add', lessonController.addLesson);
router.post('/toggle', lessonController.toggleLesson);
router.post('/delete', lessonController.deleteLesson);
module.exports = router;
