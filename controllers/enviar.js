
module.exports = async function (request, response) {
    
    var respuesta = {};

    try {
        var mensaje=request.body.mensaje;
        var asunto=request.body.asunto;
		respuesta['resultado']="ok";
        response.json(respuesta);
    }
    catch (e) {
        respuesta['resultado']="not ok";
        response.json(respuesta);
    }
    
     
 }