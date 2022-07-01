import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-left-text">
            <p>
              <Link to="/AboutUs">About</Link>
            </p>
            <p>
              <Link to="/Contact">Contact</Link>
            </p>
          </div>
          <h1><Link to="/">Forest Hotel</Link></h1>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-text">
            <p>
              <Link to="/Rooms">Rooms</Link>
            </p>
            <p>
              <Link to="/Amenities">Amenities</Link>
            </p>
            <p>
              <Link to="/GuestLogin">Bookings</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
