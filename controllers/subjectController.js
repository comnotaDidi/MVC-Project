const Subject = require('../models/subject');
const Lesson = require('../models/lesson');

exports.getSubjects = (req, res) => {
  const subjects = Subject.getAll().map(subject => ({
    ...subject,
    progress: Lesson.getProgress(subject.id),
  }));
  res.render('subjects', { subjects });
};

exports.addSubject = (req, res) => {
  const { name } = req.body;
  if (!name || name.trim().length === 0) {
    // Можно рендерить страницу с ошибкой или flash-сообщением
    return res.status(400).send('Название предмета не может быть пустым');
  }
  Subject.add(name.trim());
  res.redirect('/subjects');
};

exports.updateSubject = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).send('Название предмета не может быть пустым');
  }

  const updated = Subject.update(id, name.trim());
  if (!updated) {
    return res.status(404).send('Предмет не найден');
  }
  res.redirect('/subjects');
};

exports.deleteSubject = (req, res) => {
  const { id } = req.params;
  const subject = Subject.getById(id);
  if (!subject) {
    return res.status(404).send('Предмет не найден');
  }

  Subject.delete(id);
  res.redirect('/subjects');
};
exports.getSubjectEditForm = (req, res) => {
  const subject = Subject.getById(req.params.id);
  if (!subject) return res.status(404).send('Предмет не найден');
  res.render('editSubject', { subject });
};

exports.updateSubject = (req, res) => {
  const { name } = req.body;
  const success = Subject.update(req.params.id, name);
  if (!success) return res.status(404).send('Предмет не найден');
  res.redirect('/subjects');
};

exports.deleteSubject = (req, res) => {
  const success = Subject.delete(req.params.id);
  if (!success) return res.status(404).send('Предмет не найден');
  res.redirect('/subjects');
};
