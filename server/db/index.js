const mysql = require('mysql');
const pool = mysql.createPool({
	connectionLimit: 10,
	password: '12345678',
	user: 'root',
	database: 'prueba',
	host: 'localhost',
	port: '3306'
});
let vista1 = {};
vista1.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.reporte_ingreso_usuarios_view', (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results);
		});
	});
};
vista1.one = (nombreUsuario) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.reporte_ingreso_usuarios_view where nombreUsuario = ?', [nombreUsuario], (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};
module.exports = vista1;

let vista2 = {};
vista2.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.canciones_mas_escuchadas', (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results);
		});
	});
};
vista2.one = (nombreCancion) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM prueba.canciones_mas_escuchadas where nombreCancion = ?', [nombreCancion], (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};
module.exports = vista2;

let vista3 = {};
vista3.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT count(idTarjeta) as Tarjetas, nombreUsuario FROM prueba.cantidad_tarjetas_registradas group by nombreUsuario order by Tarjetas', (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results);
		});
	});
};
vista3.one = (nombreUsuario) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT count(idTarjeta) as Tarjetas, nombreUsuario FROM prueba.cantidad_tarjetas_registradas where nombreUsuario = ?', [nombreUsuario], (err, results) => {
			if(err){
				return reject(err);
			}
			return resolve(results[0]);
		});
	});
};
module.exports = vista3;