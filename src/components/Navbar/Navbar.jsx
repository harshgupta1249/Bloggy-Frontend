import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import './Navbar.css';

const Navbar = () => {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"});
    };

    const PF = "http://localhost:8000/images/";
    const about = "https://firstsiteguide.com/benefits-of-blogging/";

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
                    <li className="listItem"><a href={about} target="_blank" className="link" rel="noreferrer">ABOUT</a></li>
                    <li className="listItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="listItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            {
                                user.ProfilePic ? (
                                    <img className="profile" src={PF+user.ProfilePic} alt="profile" />
                                ) : (
                                    <img className="profile" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
                                )
                            }
                                
                        </Link>
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
