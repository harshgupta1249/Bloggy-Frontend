import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="top">

            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>

            <div className="topCenter">
                <ul className="list">
                    <li className="listItem">HOME</li>
                    <li className="listItem">ABOUT</li>
                    <li className="listItem">WRITE</li>
                    <li className="listItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="profile" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                <i className="searchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Navbar;
