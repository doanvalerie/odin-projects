const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  release_date: { type: String, required: true },
});

AlbumSchema.virtual('url').get(function () {
  return `/inventory/album/${this._id}`;
});

module.exports = mongoose.model('Album', AlbumSchema);
