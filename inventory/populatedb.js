console.log(
  'This script populates some test genres and albums to the database. Specified database as argument.'
);

const userArgs = process.argv.slice(2);

const Genre = require('./models/genre');
const Album = require('./models/album');

const genresMap = new Map();
const albumsMap = new Map();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

try {
  main();
} catch (err) {
  console.log(err);
}

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');

  await createGenres();
  await createAlbums();

  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function genreCreate(name, description) {
  const genre = new Genre({
    name: name,
    description: description,
  });
  await genre.save();
  genresMap[name] = genre;
  console.log(`Added genre: ${name}`);
}

async function albumCreate(title, description, category, release_date) {
  const album = new Album({
    title: title,
    description: description,
    category: category,
    release_date: release_date,
  });
  await album.save();
  albumsMap[title] = album;
  console.log(`Added album: ${title}`);
}

async function createGenres() {
  console.log('Adding authors');
  await Promise.all([
    genreCreate(
      'Rap',
      "Rap is where artists drop tight verses over dope beats, spitting raw truths and storytelling from the heart. Originating from the U.S. streets, it's all about rhythm, flow, and lyrical genius, capturing real-life struggles and triumphs. Evolving into a global culture, rap remains the pulse of urban narratives and creative expression."
    ),
  ]);
}

async function createAlbums() {
  console.log('Adding albums');
  await Promise.all([
    albumCreate(
      'To Pimp a Butterfly',
      '"To Pimp a Butterfly" is the critically acclaimed third studio album by American rapper Kendrick Lamar, released in 2015. It\'s a deeply introspective and politically charged project that delves into themes of racial identity, systemic oppression, fame, and self-worth, offering a profound commentary on the African-American experience. Musically diverse, the album blends elements of jazz, funk, soul, and hip-hop, showcasing Lamar\'s intricate lyricism, storytelling prowess, and innovative approach to genre-bending artistry.',
      genresMap['Rap'],
      'March 15, 2015'
    ),
  ]);
}
