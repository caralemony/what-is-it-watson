const express = require('express');
const router = express.Router();
const home = require('./index.js');
const newsAPI = require('./apiCalls.js');

router.get('/', home.get);

router.get('/newsCall?', (req, res) => {
  const url = req.url;
  const searchTerm = encodeURIComponent(url.split('=')[1]);
  newsAPI(searchTerm);
})

module.exports = router;