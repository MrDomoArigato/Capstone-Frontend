import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Assuming you're using react-icons for the profile icon

function ProfileButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>
      <FaUserCircle style={iconStyle} />
    </button>
  );
}

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
  outline: 'none',
};

const iconStyle = {
  fontSize: '24px', // Adjust the size as needed
};

export default ProfileButton;
