import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div class="container">
      {/* <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" /> */}
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
          Have questions, suggestions, or just want to say hello? Feel free to drop us a message using the form below. We'd love to hear from you!
          </p>

          <div class="info">
            <div class="information">
              <i class="fas fa-map-marker-alt"></i> Address Pin

              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div class="information">
              <i class="fas fa-envelope"></i> Email 
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <i class="fas fa-phone"></i>Contact - 
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <Link to="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="contact-form">
          {/* <span class="circle one"></span>
          <span class="circle two"></span> */}

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact