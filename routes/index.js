var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: "Mini Messageboard", messages: messages})
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  messages.push({text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect('/');
})

module.exports = router;
