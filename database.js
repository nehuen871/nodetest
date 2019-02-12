const mongoose = require('mongoose');
//url DB
const url = 'mongodb://localhost:27017/mern';

mongoose.connect(url,{ useNewUrlParser: true })
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;