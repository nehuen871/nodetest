const mongoose = require('mongoose');
const {Schema} = mongoose;

//Modele de usuario

const userSchema = new Schema({
    nombre:{type: String, require : true},
    email:{type: String, required: true},
    fecha_alta:{type: Date},
    paswd:{type: String}
});

//esporta el modelo del usuario para poder usarlo
module.exports = mongoose.model('user' , userSchema);