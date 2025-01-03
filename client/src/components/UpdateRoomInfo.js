import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateRoomInfo() {
  const [room, setRoom] = useState({
    name: '',
    roomNumber: '',
    capacity: '',
    description: '',
    availability: false,
    pricePerHour: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/rooms/${id}`) // Adjust endpoint for rooms
      .then((res) => {
        setRoom({
          name: res.data.name,
          roomNumber: res.data.roomNumber,
          capacity: res.data.capacity,
          description: res.data.description,
          availability: res.data.availability,
          pricePerHour: res.data.pricePerHour,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRoomInfo GET request');
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoom({
      ...room,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: room.name,
      roomNumber: room.roomNumber,
      capacity: room.capacity,
      description: room.description,
      availability: room.availability,
      pricePerHour: room.pricePerHour,
    };

    axios
      .put(`/api/rooms/${id}`, data) // Adjust endpoint for rooms
      .then(() => {
        navigate(`/show-room/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRoomInfo PUT request ->');
        console.log(err);
      });
  };

  return (
    <div className="UpdateRoomInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/room-list" className="btn btn-outline-warning float-left">
              Show Room List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Room</h1>
            <p className="lead text-center">Update Room's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name of the Room"
                name="name"
                className="form-control"
                value={room.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="roomNumber">Room Number</label>
              <input
                type="text"
                placeholder="Room Number"
                name="roomNumber"
                className="form-control"
                value={room.roomNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="capacity">Capacity</label>
              <input
                type="number"
                placeholder="Capacity"
                name="capacity"
                className="form-control"
                value={room.capacity}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Room"
                name="description"
                className="form-control"
                value={room.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="availability">
                <input
                  type="checkbox"
                  name="availability"
                  checked={room.availability}
                  onChange={onChange}
                  style={{ marginRight: '8px' }}
                />
                Available
              </label>
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="pricePerHour">Price Per Hour</label>
              <input
                type="text"
                placeholder="Price Per Hour"
                name="pricePerHour"
                className="form-control"
                value={room.pricePerHour}
                onChange={onChange}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">
              Update Room
            </button>
            <br /> <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRoomInfo;
