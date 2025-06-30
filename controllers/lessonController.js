const Lesson = require('../models/lesson');
const Subject = require('../models/subject');

exports.getLessons = (req, res) => {
  const subjectId = Number(req.params.subjectId);

  const subject = Subject.getById(subjectId);
  if (!subject) {
    return res.status(404).send('Предмет не найден');
  }

  const lessons = Lesson.getBySubjectId(subjectId);

  res.render('lessons', { subject, lessons });
};

exports.addLesson = (req, res) => {
  const { subjectId, title } = req.body;
  Lesson.add(parseInt(subjectId), title);
  res.redirect(`/lessons/${subjectId}`);
};

exports.toggleLesson = (req, res) => {
  const { lessonId, subjectId } = req.body;
  Lesson.toggleCompleted(parseInt(lessonId));
  res.redirect(`/lessons/${subjectId}`);
};

exports.deleteLesson = (req, res) => {
  const { lessonId, subjectId } = req.body;
  Lesson.remove(parseInt(lessonId));
  res.redirect(`/lessons/${subjectId}`);
};
