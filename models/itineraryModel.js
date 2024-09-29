const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attractions: [
    {
      name: String,
      address: String,
      rating: Number,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;