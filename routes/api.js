const express = require('express');
const router = express.Router();

const saavnController = require('../controllers/saavn');

router.get('/search/:input', saavnController.getAutoCompleteResults);

router.get('/search/song/:input', saavnController.getSongSearchResults);

router.get('/search/album/:input', saavnController.getAlbumSearchResults);

router.get('/songs/album/:id', saavnController.getSongsFromAlbum);

router.get('/song/:id', saavnController.getsongId);

router.get('/music/:pid', saavnController.getsong);

module.exports = router;