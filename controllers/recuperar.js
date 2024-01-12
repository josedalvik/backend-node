var modeloMensaje = require('../model/mensaje.js');

module.exports = async function (request, response) {
    
    var respuesta = {};

    try {
		modeloMensaje.recuperar(function(error, mensajes){
			respuesta['resultado']="ok";
			respuesta['mensajes']=mensajes;
			response.json(respuesta);
		});
    }
    catch (e) {console.log(e);
        respuesta['resultado']="not ok";
        response.json(respuesta);
    }
    
     
 }