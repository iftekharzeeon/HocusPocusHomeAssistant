const express = require('express');
const bodyParser = require('body-parser').json();

const searchController = require('../controllers/searchController');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/api/getSearch/', bodyParser, searchController.searchEngine);

router.post('/api/newsSearch', bodyParser, searchController.newsSearch);

router.post('/api/uploadNote', bodyParser, noteController.addNote);

router.post('/api/getAllNotes', bodyParser, noteController.allNotes);

router.post('/api/getNotesByDate', bodyParser, noteController.allNotes);


module.exports = router;