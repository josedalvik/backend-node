var modeloMensaje = require('../model/mensaje.js');

module.exports = async function (request, response) {
    
    var respuesta = {};

    try {
        var asunto=request.body.asunto;
        var mensaje=request.body.mensaje;
		
		modeloMensaje.enviar(asunto, mensaje);
		
		respuesta['resultado']="ok";
        response.json(respuesta);
    }
    catch (e) {console.log(e);
        respuesta['resultado']="not ok";
        response.json(respuesta);
    }
    
     
 }