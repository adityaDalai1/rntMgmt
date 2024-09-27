
const RoomModel = require('../models/roomModel');  // Import Room model

// Create a new Room
exports.createRoom = async (req, res) => {
    try {
        let newRoom = new RoomModel({
            name: req.body.name,
            maxcount: req.body.maxcount,
            phonenumber: req.body.phonenumber,
            rentperday: req.body.rentperday,
            type: req.body.type,
            description: req.body.description,
            location: req.body.location,
            amenities: req.body.amenities,
            availability: req.body.availability
        });
        newRoom = await newRoom.save(); // Save the new room to the database
        res.send(newRoom); // Send the saved room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const allRooms = await RoomModel.find(); // Fetch all rooms from the database
        res.send(allRooms); // Send all rooms as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get a room by ID
exports.getRoomById = async (req, res) => {
    try {
        const roomById = await RoomModel.findById(req.params.id); // Find room by ID
        if (!roomById) return res.status(404).send('Room not found in database'); // If room is not found, return 404
        res.send(roomById); // Send the room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Update a room by ID
exports.updateRoom = async (req, res) => {
    try {
        const updatedRoom = await RoomModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            maxcount: req.body.maxcount,
            phonenumber: req.body.phonenumber,
            rentperday: req.body.rentperday,
            type: req.body.type,
            description: req.body.description,
            location: req.body.location,
            amenities: req.body.amenities,
            availability: req.body.availability
        }, { new: true }); // Return the updated room

        if (!updatedRoom) return res.status(404).send('Room not found in database'); // If room is not found, return 404
        res.send(updatedRoom); // Send the updated room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    try {
        const roomById = await RoomModel.findByIdAndDelete(req.params.id); // Find room by ID and delete it
        if (!roomById) return res.status(404).send('Room not found in database'); // If room is not found, return 404
        res.send("Room deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};
