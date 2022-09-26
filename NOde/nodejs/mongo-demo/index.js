const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('connecte to mongodb'))
  .catch((err) => console.log('Error could not connect', err));
