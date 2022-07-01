import React from 'react';

export default function Header() {
  return (
    <div className="navbar">
          <img src='./logo.png'/>
            <a href="./AboutUs">About Us</a>
            <a href="./Rooms">Rooms</a>
            <a href="./Amenities">Amenities</a>
            <a href="./Contact">Contact</a>
            <button href="./GuestLogin">Bookings</button>
            <button href="./AdminLogin">Admin</button>
    </div>
  )
}
