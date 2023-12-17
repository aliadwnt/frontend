import React from "react";

const Profile = () => {
  // Gantilah data profil berikut dengan data yang sesuai dengan kebutuhan aplikasi Anda
  const userProfile = {
    username: "JohnDoe",
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Developer",
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {userProfile.username}
      </p>
      <p>
        <strong>Full Name:</strong> {userProfile.fullName}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p>
        <strong>Bio:</strong> {userProfile.bio}
      </p>
    </div>
  );
};

export default Profile;
