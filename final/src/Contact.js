import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = ({ user, onLogout }) => {
  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className="container">
        {/* <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" /> */}
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Have questions, suggestions, or just want to say hello? Feel free to drop us a message using the form below. We'd love to hear from you!
            </p>

            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i> Address Pin
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i> Email 
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>Contact - 
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {/* <span className="circle one"></span>
            <span className="circle two"></span> */}
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
