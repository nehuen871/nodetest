var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET home page. */
/* las funcions con async se utilizan en vez el then o definir funciones sin nombre, se agrega el await para esperar el resultado */
router.get('/', async (req, res, next) => {
  //agarra los get que se pasen por la url
  //console.log(req.query);
  //agarra los datos envias con / en la url se tiene que agregar
  // esto en la funcion router.get('/:id'
  //ej: http://localhost:3000/33
  //console.log(req.params);

  /*busca en la bd la los usuairos, en la funcion de adentro define el err y el tipo de dato que devuelve que es un user */
  var userResponse = await user.find()
  console.log(userResponse);
  //envia en la respuesta un json
  /*res.send(
    {
      user: req.params
    }
  );*/
  //otra foma de enviar un json
    res.json(userResponse);
  //res.render('index', { title: 'Express' }); //el render carga la view
});

/* recivir datos por post */
router.post('/', async (req,res,next) => {
  /*req.body agarra los datos del post */
  var {nombre,email,fecha_alta,passwd} = req.body;
  var userInser = new user({nombre,email,fecha_alta,passwd});
  await userInser.save();
  console.log(userInser);
  res.json('funciona');
  //var userInsert = await user.insertMany(req.body);
})

module.exports = router;
