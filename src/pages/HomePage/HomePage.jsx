import { useState, useEffect } from "react";
import axios from "axios";
import './HomePage.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const HomePage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPost = async () => {
            const res = await axios.get("http://localhost:8000/post/");
            setPosts(res.data);
            console.log(res.data);
        }
        fetchPost();
    },[]);

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