const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://juancastro:canserbero123@cluster0.hgltu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));