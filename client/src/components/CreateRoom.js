import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: '',
    number: '',
    capacity: '',
    description: '',
    available_from: '',
    facilities: '',
  });

  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/rooms', room)
      .then((res) => {
        setRoom({
          name: '',
          number: '',
          capacity: '',
          description: '',
          available_from: '',
          facilities: '',
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
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreateRoom!', err);
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
            <p className='lead text-center'>Create a new room</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Room'
                  name='name'
                  className='form-control'
                  value={room.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Room Number'
                  name='number'
                  className='form-control'
                  value={room.number}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Capacity'
                  name='capacity'
                  className='form-control'
                  value={room.capacity}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe the Room'
                  name='description'
                  className='form-control'
                  value={room.description}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Available From'
                  name='available_from'
                  className='form-control'
                  value={room.available_from}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Facilities (e.g., Projector, Whiteboard)'
                  name='facilities'
                  className='form-control'
                  value={room.facilities}
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
