const express = require('express');
const bodyParser = require('body-parser').json();

const searchController = require('../controllers/searchController');

const router = express.Router();

router.post('/api/getSearch/', bodyParser, searchController.searchEngine);

router.post('/api/newsSearch', bodyParser, searchController.newsSearch);


module.exports = router;