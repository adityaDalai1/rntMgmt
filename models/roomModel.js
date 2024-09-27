
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Room name is mandatory
    unique: true     // Ensures no two rooms have the same name
  },
  maxcount: {
    type: Number,
    required: true   // Maximum number of people allowed in the room
  },
  phonenumber: {
    type: String,
    required: true   // Contact phone number is mandatory
  },
  rentperday: {
    type: Number,
    required: true   // Daily rent amount is mandatory
  },
  type: {
    type: String,
    required: true   // Room type is mandatory (e.g., Single, Double, Suite)
  },
  description: {
    type: String,
    required: true   // A description of the room is required
  },
  location: {
    type: String,
    required: true   // Location of the room/property is mandatory
  },
  amenities: {
    type: [String],  // Array of amenities (e.g., WiFi, Air Conditioning)
    required: true   // At least one amenity is required
  },
  availability: {
    type: Boolean,
    default: true    // Availability is true by default
  }
});

const RoomModel = mongoose.model('Room', roomSchema);

module.exports = RoomModel;
