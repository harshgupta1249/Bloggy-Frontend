import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Sidebar.css';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);
    const {user} = useContext(Context);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:8000/category/all");
            setCats(res.data);
        }
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                    {user ? <p>An Enthusiast Blogger. Exploring new fields of life, carrer and passion. Now I am so connected with Reading and Writing blogs, my day feels uncomplete without seeing one.</p> : 
                    <p><Link to="/login">Not Logged in</Link>
                        
                    </p>
                    }
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((cat) => (
                        <li className="sidebarListItem" key={cat._id}>
                            {cat.name}
                        </li>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;