const mysql = require('mysql');
const pool = mysql.createPool({
	connectionLimit: 10,
	password: '12345678',
	user: 'root',
	database: 'prueba',
	host: 'localhost',
	port: '3306'
});
let vistasdb = {};
vistasdb.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.reporte_ingreso_usuarios_view', (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results);
		});
	});
};
vistasdb.one = (nombreUsuario) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.reporte_ingreso_usuarios_view where nombreUsuario = ?', [nombreUsuario], (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};
module.exports = vistasdb;