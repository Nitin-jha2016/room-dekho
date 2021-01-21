import React from "react";
import "./Room.css";
import { ImLocation } from "react-icons/im";
import { FaWifi, FaToilet, FaCarAlt } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
function Room() {

    const [viewPhone, setviewPhone] = React.useState(false)


  return (
    <div className="room-container">
      <div className="left-section">
        <img
          className="room-img"
          src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2020/Feb/15/Photo_h400_w540/GR2-45657-221037_400_540.jpg"
        ></img>
      </div>
      <div className="right-section">
        <div className="room-price">
          <span className="price">$5,600</span>
          <span className="sharing">Twin Sharing</span>
          <span className="for">For Boys</span>
          <span className="for">All Preffered</span>
        </div>
        <div className="room-heading">
          <span className="type">PG/Paying Guest </span>
          <span className="location">
            in Sector 59 <ImLocation className="loc-icon" />
          </span>
        </div>
        <div className="room-detail">
          <span className="sharing">Twin Sharing</span>
          <span className="price">$5,600</span>
        </div>
        <div className="room-facilities">
          <span className="key-facilities">Key Facilities</span>
          <span className="facilities">
            <FaWifi className="icon"/>
            <MdKitchen className="icon"/>
            <GiVacuumCleaner className="icon"/>
            <FaToilet className="icon"/>
            <FaCarAlt className="icon"/>
          </span>
        </div>
        <div className="room-description">
            <p>Premium Range rooms with all the basic amenity mdular kitchen and washroom, corner house with parking ...<a href="#">Read more</a></p>
           
        </div>
        <div className="room-btns">
            <button className="view-btn" onClick={()=> setviewPhone(!viewPhone)}>{viewPhone?'9865868687':'View Phone No.'}</button>
            <button className="contact-btn">Contact Owner</button>
        </div>
      </div>
    </div>
  );
}

export default Room;
