import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePost.css';
import { Link } from 'react-router-dom';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/post/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img
                        className="singlePostImg"
                        src={post.photo}
                        alt=""
                    />
                }

                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <span className="singlePostAuthor">
                                {post.username}
                            </span>
                        </Link>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    );
}

export default SinglePost;