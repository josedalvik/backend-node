const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mensajes.db');
const crypto = require('crypto');

module.exports = {
    enviar: enviar
}

function enviar(asunto, mensaje){
    db.serialize(() => {
		const stmt = db.prepare("INSERT INTO mensaje VALUES (?, ?,?)");
		stmt.run(crypto.randomUUID(), asunto, mensaje);
		stmt.finalize();
		db.each("SELECT id, asunto, mensaje FROM mensaje", (err, row) => {
			console.log(row.id, row.asunto + " ------ " + row.mensaje);
		});
	});
}
