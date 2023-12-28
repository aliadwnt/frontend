import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../components/img/avatar.png';

const Profile = () => {
  const [userData, setUserData] = useState({
    photo: avatar,
    name: 'Full Name',
    username: 'username',
    email: 'email@gmail.com',
    phoneNumber: '089700006',
  });

  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleEditSave = (editedData) => {
    // Add logic to save the edited data
    setUserData(editedData);
    setEditModalVisible(false);
  };

  const handleLogoutClick = () => {
    // Add logic to handle the logout button click
    console.log('Logout button clicked');
  };

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
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-primary" onClick={handleEditClick}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div
        className={`modal fade ${editModalVisible ? 'show' : ''}`}
        style={{ display: editModalVisible ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/* Add your modal content and form here */}
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setEditModalVisible(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
  <form>
    <div className="form-group">
      <label htmlFor="editName">Full Name:</label>
      <input
        type="text"
        className="form-control"
        id="editName"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="editUsername">Username:</label>
      <input
        type="text"
        className="form-control"
        id="editUsername"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="editEmail">Email:</label>
      <input
        type="email"
        className="form-control"
        id="editEmail"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="editPhoneNumber">Phone Number:</label>
      <input
        type="text"
        className="form-control"
        id="editPhoneNumber"
        value={userData.phoneNumber}
        onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
      />
    </div>
  </form>
</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setEditModalVisible(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleEditSave(/* pass edited data */)}
              >
                Save changes
              </button>
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
