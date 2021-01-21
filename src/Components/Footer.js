import React from "react";
import "./Footer.css";
import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer-container">
            <div className="footer-section-top">
                <h2>
                <a className="navbar-brand">
                    <span className="room">ROOM</span>{" "}
                    <span className="dekho">DEKHO</span>
                </a>
                </h2>
                <p>
                Launched in 2021, RoomDekho is India's No.1 online Property
                marketplace to buy, sell, and rent residential and commercial
                properties. Adjudged as the most preferred real estate portal in India
                by various independent surveys, Magicbricks offers a one-stop
                destination for all Property needs.
                </p>
                <div>
                <div className="navbar-buttons">
                     <a href="#"><img src="https://miro.medium.com/max/4000/1*OIIv4FEjJQMqh-zEPhtlYA.png"></img></a>
                     <a href="#"><img src="https://i1.wp.com/incipia.co/wp-content/uploads/2017/10/app-store.png?fit=519%2C160&ssl=1"></img></a>
                </div>
                <div className="navbar-links">
                      <a href="#"><FaFacebook/></a>
                      <a href="#"><FaTwitter/></a>
                      <a href="#"><FaLinkedin/></a>
                      <a href="#"><FaYoutube/></a>
                </div>
                </div>
            </div>
      <div className="footer-section-bottom">
          <div className="footer-navbar">
             <a>Sitemap</a>
             <a>Terms & Conditions</a>
             <a>Career</a>
             <a>Privacy Policy</a>
             <a>Blog</a>
             <a>Testimonials</a>
             <a>Feedback</a>
             <a>Unsubscribe</a>
             <a>Help Center</a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
