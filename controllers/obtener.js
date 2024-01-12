var modeloMensaje = require('../model/mensaje.js');

module.exports = async function (request, response) {
    
    var respuesta = {};

    try {
		var id=request.params.id;
		modeloMensaje.obtener(id, function(error, mensaje){
			respuesta['resultado']="ok";
			respuesta['mensaje']=mensaje;
			response.json(respuesta);
		});
    }
    catch (e) {console.log(e);
        respuesta['resultado']="not ok";
        response.json(respuesta);
    }
    
     
 }