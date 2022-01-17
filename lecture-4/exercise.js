const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.json());

/**
 * Da se napravi API sistem za menadziranje na vraboteni.
 * Sistemot treba da nudi ruti za dobivanje na site vraboteni,
 * kreiranje na nov vraboten,
 * dobivanje na vraboteni po profesija,
 * menuvanje na podatoci za vraboten,
 * brisenje na vraboten od sistemot.
 */

const students = [];

// These params can be sent as part of the url
// 1. Route parameters
// 2. Query parameters

// facebook.com/kosta.petrov
// facebook.com/boban.sugareski54

// Naming of routes: Resource-based
app
  .get('/students', (req, res) => {
    res.send({
      message: 'List of all students',
      students: students
    })
  })
  .get('/students/:smer', (req, res) => {
    let filteredStudents = students.filter(student => {
      return student.smer.toLowerCase() == req.params.smer.toLowerCase()
    })
    res.send({
      message: 'All students with program ' + req.params.smer,
      students: filteredStudents
    })
  })
  .get('/students/year/:godina', (req, res) => {
    let filteredStudents = students.filter(student => {
      return student.godina == req.params.godina
    })
    res.send({
      message: 'All students with year ' + req.params.godina,
      students: filteredStudents
    })
  })
  .post('/students', (req, res) => {
    students.push(req.body);
    res.send({
      message: 'New student with the name of ' + req.body.name + ' is added to the database.',
      students: students
    })
  })

app.listen(port, () => {
  console.log(`Semos Academy hello world app listening at http://localhost:${port}`)
});