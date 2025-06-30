let subjects = [];

module.exports = {
  getAll: () => subjects,

  getById: (id) => subjects.find(s => s.id.toString() === id.toString()),

  add: (name) => {
    const newSubject = {
      id: Date.now().toString(),
      name,
      progress: [],
    };
    subjects.push(newSubject);
    return newSubject;
  },

  update: (id, newName) => {
    const subject = subjects.find(s => s.id.toString() === id.toString());
    if (!subject) return false;
    subject.name = newName;
    return true;
  },

  delete: (id) => {
    const index = subjects.findIndex(s => s.id.toString() === id.toString());
    if (index === -1) return false;
    subjects.splice(index, 1);
    return true;
  }
};
