var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
const Cliente = require('../models').cliente;

router.get('/findAll/json', function(req, res, next) {  

/* MÉTODO ESTÁTICO findAll  */
Cliente.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
    })  
    .then(resultado => {  
        res.json(resultado);  
    })  
    .catch(error => res.status(400).send(error)) 
});

/* MÉTODO ESTÁTICO findbyID  */
router.get('/findById/:id/json', function(req, res, next) {  

    let id = req.params.id;

    Cliente.findByPk(id)
        .then(instancia => {
          if(instancia) {
            res.status(200).json(instancia);
          } else {
            res.status(404).json({error: "No existe registro con el identificador "+id})
          }
        })
        .catch(error => res.status(400).send(error))
});

/* MÉTODO ESTÁTICO deletebyID  */

module.exports = router;