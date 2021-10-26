import { useState, useEffect } from "react";
import axios from "axios";
import './HomePage.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from "react-router";

const HomePage = () => {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(()=>{
        const fetchPost = async () => {
            console.log(search);
            const res = await axios.get("http://localhost:8000/post/"+search);
            setPosts(res.data);
        }
        fetchPost();
    },[search]);

    return ( 
        <>
        <Header />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar />
        </div>
        </>
     );
}
 
export default HomePage;