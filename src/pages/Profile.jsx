import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../components/img/avatar.png';

const Profile = () => {
  const [userData, setUserData] = useState({
    photo: avatar,
    name: 'Alia Dewanto',
    username: 'aliadwnt',
    email: 'dewantoalia@gmail.com',
    phoneNumber: '081229333266',
  });

  return (
    <div className="container mt-4 d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="row justify-content-center flex-grow-1">
        <div className="col-md-6">
          <div className="card shadow">
            <img
              src={userData.photo}
              className="card-img-top rounded-circle mx-auto mt-3"
              alt="Profile"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title display-4">{userData.name}</h5>
              <p className="card-text">
                <strong>Username:</strong> {userData.username}
              </p>
              <p className="card-text">
                <strong>Email:</strong> {userData.email}
              </p>
              <p className="card-text">
                <strong>Phone Number:</strong> {userData.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
