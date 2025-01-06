import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const CreateRoom = (props) => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    amenities: '',
    roomissueddate: '',
    availability: true,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/rooms', room)
      .then((res) => {
        setRoom({
          name: '',
          maxcount: '',
          phonenumber: '',
          rentperday: '',
          type: '',
          description: '',
          location: '',
          amenities: '',
          roomissueddate: '',
          availability: true,
        });

        toast.success('Room added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in CreateRoom:', err);
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <div className='CreateRoom'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Room List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Room</h1>
            <p className='lead text-center'>Create new room</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Room Name'
                  name='name'
                  className='form-control'
                  value={room.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Max Count'
                  name='maxcount'
                  className='form-control'
                  value={room.maxcount}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='phonenumber'
                  className='form-control'
                  value={room.phonenumber}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Rent Per Day'
                  name='rentperday'
                  className='form-control'
                  value={room.rentperday}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Type of Room'
                  name='type'
                  className='form-control'
                  value={room.type}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <textarea
                  placeholder='Room Description'
                  name='description'
                  className='form-control'
                  value={room.description}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Location'
                  name='location'
                  className='form-control'
                  value={room.location}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Amenities (comma-separated)'
                  name='amenities'
                  className='form-control'
                  value={room.amenities}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='date'
                  name='roomissueddate'
                  className='form-control'
                  value={room.roomissueddate}
                  onChange={onChange}
                />
              </div>
              <br />

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
