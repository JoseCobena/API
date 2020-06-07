const express = require('express');
const db = require('../db');
const router = express.Router();
router.get('/vista1', async(req, res, next) => {
	try{
		let results = await db.all();
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista1/:nombreUsuario', async(req, res, next) => {
	try{
		let results = await db.one(req.params.nombreUsuario);
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista2', async(req, res, next) => {
	try{
		let results = await db.all();
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista2/:nombreCancion', async(req, res, next) => {
	try{
		let results = await db.one(req.params.nombreCancion);
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista3', async(req, res, next) => {
	try{
		let results = await db.all();
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});
router.get('/vista3/:nombreUsuario', async(req, res, next) => {
	try{
		let results = await db.one(req.params.nombreUsuario);
		res.json(results);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
});module.exports = router;