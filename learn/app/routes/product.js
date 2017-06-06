var express = require('express')
var router = express.Router()


router.use(function timeLog(req, res, next) {
	console.log('Time', Date.now())

	// [Function: next]
	console.log(next)

	next()
})

router
	.get('/', function(req, res) {
		res.send('product list')
	})
	.get('/view', function(req, res) {
		res.send('product view')
	})
	.get('/ajax', function(req, res) {
		res.jsonp({ code: 0 })
	})
	.get('/redirect', function(req, res) {
		res.redirect('http://www.baidu.com')
	})
	.get('/download', function(req, res) {
		res.download('package.json')
	})
	.get('/500', function(req, res) {
		//res.sendStatus(500)

		// or

		res.status(500).send(' 500 ')
	})
	.get('/login', function(req, res, next) {
		console.log('send login')
		next()
	}, function (req, res) {
		console.log('login end')
		res.send('login end')
	})
	.get('/links', function(req, res, next) {
			res.links({
				next: 'http://api.example.com/users?page=2',
  				last: 'http://api.example.com/users?page=5'
			})

			next()
	})

module.exports = router
