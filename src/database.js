const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://george:canserbero123@cluster0.toijdup.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log("Conectado"))
.catch(err => console.log(err))
