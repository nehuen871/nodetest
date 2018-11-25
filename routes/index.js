var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  //agarra los get que se pasen por la url
  console.log(req.query);
  
  //agarra los datos envias con / en la url se tiene que agregar
  // esto en la funcion router.get('/:id'
  //ej: http://localhost:3000/33
  console.log(req.params);

  //envia en la respuesta un json
  res.send(
    {
      user: ["will","test"]
    }
  );
  //res.render('index', { title: 'Express' }); //el render carga la view
});

module.exports = router;
