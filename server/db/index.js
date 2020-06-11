const mysql = require('mysql');
const pool = mysql.createPool({
	connectionLimit: 10,
	password: 'Pocho2001',
	user: 'root',
	database: 'Spotify',
	host: '127.17.0.2',
	port: '3306'
});
let vista1 = {};
vista1.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM Spotify.reporte_ingreso_usuarios_view', (err, results1) => {
			if(err){
				return reject(err);
			}
			return resolve(results1);
		});
	});
};
vista1.one = (nombreUsuario) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM Spotify.reporte_ingreso_usuarios_view where nombreUsuario = ?', [nombreUsuario], (err, results1) => {
			if(err){
				return reject(err);
			}
			return resolve(results1[0]);
		});
	});
};


let vista2 = {};
vista2.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM Spotify.canciones_mas_escuchadas', (err, results2) => {
			if(err){
				return reject(err);
			}
			return resolve(results2);
		});
	});
};
vista2.one = (nombreCancion) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM Spotify.canciones_mas_escuchadas where nombreCancion = ?', [nombreCancion], (err, results2) => {
			if(err){
				return reject(err);
			}
			return resolve(results2[0]);
		});
	});
};


let vista3 = {};
vista3.all = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT count(idTarjeta) as Tarjetas, nombreUsuario FROM Spotify.cantidad_tarjetas_registradas group by nombreUsuario order by Tarjetas', (err, results3) => {
			if(err){
				return reject(err);
			}
			return resolve(results3);
		});
	});
};
vista3.one = (nombreUsuario) => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT count(idTarjeta) as Tarjetas, nombreUsuario FROM Spotify.cantidad_tarjetas_registradas where nombreUsuario = ?', [nombreUsuario], (err, results3) => {
			if(err){
				return reject(err);
			}
			return resolve(results3[0]);
		});
	});
};
module.exports = { 
	vista1: vista1,
	vista2: vista2,
	vista3: vista3
};
