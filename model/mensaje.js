const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mensajes.db');
const crypto = require('crypto');

module.exports = {
    enviar: enviar,
	recuperar: recuperar,
	eliminar: eliminar
}

function enviar(asunto, mensaje){
    db.serialize(() => {
		const stmt = db.prepare("INSERT INTO mensaje VALUES (?, ?,?)");
		stmt.run(crypto.randomUUID(), asunto, mensaje);
		stmt.finalize();
	});
}

function recuperar(callback){
	let mensajes = [];
	db.all("SELECT id, asunto, mensaje FROM mensaje", (err, rows) => {
		rows.forEach((row)=>{
            mensajes.push({"id": row.id, "asunto": row.asunto, "mensaje": row.mensaje});
        });
		return callback(false, mensajes.reverse());
	});
}

function eliminar(id){
    db.serialize(() => {
		const stmt = db.prepare("DELETE FROM mensaje WHERE id = ?");
		stmt.run(id);
		stmt.finalize();
	});
}