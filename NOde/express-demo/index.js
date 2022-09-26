const Joi = require('joi');
// const express = require('express');
// const app = express();

//add a piece of middleware
// app.use(express.json());

// const courses = [
//   {
//     id: 1,
//     name: 'course1',
//   },
//   {
//     id: 2,
//     name: 'course2',
//   },
//   {
//     id: 3,
//     name: 'course3',
//   },
// ];

// //Define a Route
// //1)path or url,2)callback function or Route Handle
// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// app.get('/api/courses', (req, res) => {
//   res.send(courses);
// });

// // /api/courses/1
// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     return res.status(404).send('The course with the given ID was not found');
//   res.send(course);
// });

//PORT
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on Port: ${port}`));

// app.post('/api/courses', (req, res) => {
//   const { error } = validateCourse(req.body);
//   console.log(result);
//   if (error) {
//     res.status(400).send(error.details[0].message);
//   }
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//   //Look up the course
//   //if not existing return 404
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     return res.status(404).send('The course with the given ID was not found');

//   //Validate
//   //if invalid return 400
//   const { error } = validateCourse(req.body);
//   if (error) {
//     res.status(400).send(error.details[0].message);
//   }
//   //Update course
//   //Return updated course
//   course.name = req.body.name;
//   res.send(course);
// });

// function validateCourse(course) {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };
//   return Joi.validate(course, schema);
// }

app.delete('/api/courses/:id', (req, res) => {
  //Look up the course
  //Not existing return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  const index = courses.indexOf(course);
  if (!course)
    return res.status(404).send('The course with the given ID was not found');
  //Delete
  courses.splice(index, 1);
  //Return the same course
  res.send(course);
});
