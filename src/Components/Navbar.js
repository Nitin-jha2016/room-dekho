import React from 'react'
import './Navbar.css'
import { BsSearch } from "react-icons/bs";
function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar-top">
                <a className="navbar-brand"><span className="room">ROOM</span> <span className="dekho">DEKHO</span></a>
                <ul className="nav-items">
                    <li className="nav-link">
                        <a>Buy</a>
                    </li>
                    <li className="nav-link">
                        <a>Rent</a>
                    </li>
                    <li className="nav-link">
                        <a>Sell</a>
                    </li>
                    <li className="nav-link">
                        <a>Tools & Advice</a>
                    </li>
                    <li className="nav-link">
                        <a>What 's New</a>
                    </li>
                    <li className="nav-link">
                        <a>Blog</a>
                    </li>
                    <li className="nav-link">
                        <a>Help</a>
                    </li>
                    <li className="nav-link">
                        <a>Buy</a>
                    </li>
                </ul>
                <div className="side-buttons">
                     <button className="sign-in-btn nav-btn">Sign In</button>
                     <button className="post-property-btn nav-btn">Post Property</button>
                </div>
            </nav>
            <nav className="navbar-bottom">
        
                <div className="search-input">
                  <input type="text" className=""  placeholder="Enter Landmark, Location or Project"></input><BsSearch className="search-icon"/>
                </div>
               
                <select>
                    <option className="option">Occupancy</option>
                </select>
                <select>
                    <option className="option">Occupancy</option>
                </select>
                <select>
                    <option className="option">Occupancy</option>
                </select>
                <select>
                    <option className="option">Occupancy</option>
                </select>
                <select>
                    <option className="option">Occupancy</option>
                </select>
                <select>
                    <option className="option">Occupancy</option>
                </select>
            </nav>
        </div>
    )
}

export default Navbar
