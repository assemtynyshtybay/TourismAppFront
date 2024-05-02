import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="user-details">
        <p>
          <strong>Name:</strong> Saltanat
        </p>
        <p>
          <strong>Email:</strong> salta@example.com
        </p>
        <p>
          <strong>Country:</strong> Kazahstan
        </p>
        <p>
          <strong>Phone:</strong> +8777777777
        </p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
