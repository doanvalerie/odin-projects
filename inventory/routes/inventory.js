const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const genreController = require('../controllers/genreController');
const albumController = require('../controllers/albumController');

router.get('/', indexController.index);

router.get('/genres', genreController.genreList);
router.get('/genre/:id', genreController.genreDetails);

router.get('/albums', albumController.albumList);
router.get('/album/:id', albumController.albumDetails);

module.exports = router;
