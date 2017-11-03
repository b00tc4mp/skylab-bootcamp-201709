var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.get('/', function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1

  if (!req.session.lang)
  	req.session.lang = 'en'
  else
  	console.log(req.session.lang)

  res.end(req.session.views + ' views')
})

app.listen(3000)