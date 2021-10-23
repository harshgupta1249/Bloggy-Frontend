import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const user = false;
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
                    <li className="listItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="listItem"><Link className="link" to="/about">ABOUT</Link></li>
                    <li className="listItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="listItem">{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <img className="profile" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                    ) : (
                            <ul className="list">
                                <li className="listItem"><Link className="link" to="/login">LOGIN</Link></li>
                                <li className="listItem"><Link className="link" to="/register">REGISTER</Link></li>
                            </ul>
                    )
                }
                <i className="searchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Navbar;
