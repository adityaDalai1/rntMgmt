import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateRoomInfo(props) {
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    amenities: [],
    roomissueddate: '',
    availability: true
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms/${id}`)
      .then((res) => {
        setRoom({
          name: res.data.name,
          maxcount: res.data.maxcount,
          phonenumber: res.data.phonenumber,
          rentperday: res.data.rentperday,
          type: res.data.type,
          description: res.data.description,
          location: res.data.location,
          amenities: res.data.amenities,
          roomissueddate: res.data.roomissueddate,
          availability: res.data.availability
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRoomInfo GET request');
        console.log(err);
      });
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amenities') {
      setRoom({ ...room, amenities: value.split(',') });
    } else {
      setRoom({ ...room, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: room.name,
      maxcount: room.maxcount,
      phonenumber: room.phonenumber,
      rentperday: room.rentperday,
      type: room.type,
      description: room.description,
      location: room.location,
      amenities: room.amenities,
      roomissueddate: room.roomissueddate,
      availability: room.availability
    };

    axios
      .put(`https://rental-mgmt.onrender.com/api/rooms/${id}`, data)
      .then((res) => {
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
            <Link to="/" className="btn btn-outline-warning float-left">
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
              <label htmlFor="name">Room Name</label>
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
              <label htmlFor="maxcount">Max Count</label>
              <input
                type="number"
                placeholder="Max Count of People"
                name="maxcount"
                className="form-control"
                value={room.maxcount}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phonenumber"
                className="form-control"
                value={room.phonenumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="rentperday">Rent Per Day</label>
              <input
                type="number"
                placeholder="Rent per Day"
                name="rentperday"
                className="form-control"
                value={room.rentperday}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="type">Room Type</label>
              <input
                type="text"
                placeholder="Room Type (e.g., Single, Double)"
                name="type"
                className="form-control"
                value={room.type}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Description of the Room"
                name="description"
                className="form-control"
                value={room.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Location of the Room"
                name="location"
                className="form-control"
                value={room.location}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="amenities">Amenities</label>
              <input
                type="text"
                placeholder="Amenities (comma separated)"
                name="amenities"
                className="form-control"
                value={room.amenities.join(',')}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="roomissueddate">Room Issued Date</label>
              <input
                type="date"
                placeholder="Room Issued Date"
                name="roomissueddate"
                className="form-control"
                value={room.roomissueddate}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <input
                type="checkbox"
                name="availability"
                checked={room.availability}
                onChange={(e) => setRoom({ ...room, availability: e.target.checked })}
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
