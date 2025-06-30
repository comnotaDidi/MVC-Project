let lessons = [
  // пример данных
  // { id: 1, subjectId: 1, title: "Урок 1", completed: false },
];

module.exports = {
  getBySubjectId: (subjectId) => lessons.filter(l => l.subjectId === subjectId),

  add: (subjectId, title) => {
    const newLesson = {
      id: lessons.length ? lessons[lessons.length - 1].id + 1 : 1,
      subjectId,
      title,
      completed: false,
    };
    lessons.push(newLesson);
  },

  toggleCompleted: (lessonId) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) lesson.completed = !lesson.completed;
  },

  remove: (lessonId) => {
    lessons = lessons.filter(l => l.id !== lessonId);
  },

  getProgress: (subjectId) => {
    const subjectLessons = lessons.filter(l => l.subjectId === subjectId);
    if (subjectLessons.length === 0) return 0;
    const completedCount = subjectLessons.filter(l => l.completed).length;
    return Math.round((completedCount / subjectLessons.length) * 100);
  },
};
