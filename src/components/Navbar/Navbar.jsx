import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import './Navbar.css';

const Navbar = () => {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"});
    };

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
                    <li className="listItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            {(user.profilePic) ? (
                                <img className="profile" src={user.profilePic} alt="profile" />
                            ) : (
                                <img className="profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" />
                            )}
                        
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
