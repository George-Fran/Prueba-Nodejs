const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://georgevalencia121:canserbero123@cluster0.fd1niqj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log("zZzack Run on MongoDB 😴"))
.catch(err => console.log(err))
