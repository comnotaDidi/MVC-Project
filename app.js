const express = require('express');
const bodyParser = require('body-parser');
const subjectRoutes = require('./routes/subjectRoutes');
const lessonRoutes = require('./routes/lessonRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/lessons', lessonRoutes);
app.use('/subjects', subjectRoutes);

app.get('/', (req, res) => {
  res.redirect('/subjects');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
