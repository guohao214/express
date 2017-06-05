var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
	userDao.add(req, res, next)
})

router.get('/queryAll', function(req, res, next) {
	userDao.queryAll(req, res, next)
})

router.get('/deleteById', function(req, res, next) {
	userDao.deleteById(req, res, next)
})

router.get('/update', function(req, res, next) {
	res.render('update', { title: 'Express' });
})

router.post('/updateUser', function(req, res, next) {
	userDao.updateUser(req, res, next)
})


module.exports = router;
