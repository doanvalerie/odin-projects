const asyncHandler = require('express-async-handler');
const Album = require('../models/album');

exports.albumList = asyncHandler(async (req, res, next) => {
  const albums = await Album.find({}).exec();
  res.render('album_list', { albums: albums });
});

exports.albumDetails = asyncHandler(async (req, res, next) => {
  const album = await Album.findById(req.params.id).exec();
  console.log(album);
  res.render('album_details', { album: album });
});
