mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jorischallenge:passwordisleaked@cluster0.eqm2dzy.mongodb.net/?retryWrites=true&w=majority')
    .then( app.listen(3000))
    .catch(err => console.log(err))
