const asyncHandler = require('express-async-handler');
const Genre = require('../models/genre');

exports.genreList = asyncHandler(async (req, res, next) => {
  const genres = await Genre.find({}).exec();
  res.render('genre_list', { genres: genres });
});

exports.genreDetails = asyncHandler(async (req, res, next) => {
  const genre = await Genre.findById(req.params.id).exec();
  res.render('genre_details', { genre: genre });
});
