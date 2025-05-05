import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Contact.css'; // Ensure you add corresponding CSS styles

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBackClick = () => {
    navigate('/'); // Navigates to home page (change if your route is different)
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">Feel free to reach out to me!</p>
      <p className="contact-detail">
        Email: <a href="mailto:evaibhav0000@gmail.com" className="contact-link">evaibhav0000@gmail.com</a>
      </p>
      <p className="contact-detail">
        YouTube Channel: <a href="https://www.youtube.com/channel/UCYsDsiegluZp1XIeBABoL3Q" target="_blank" rel="noopener noreferrer" className="contact-link">Visit My YouTube Channel</a>
      </p>
      
      {/* Back to Home Button */}
      <button className="back-button" onClick={handleBackClick}>Back to Home</button>
    </div>
  );
};

export default Contact;
