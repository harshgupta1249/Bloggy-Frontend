import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePost.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/post/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [path]);

    const PF = "http://localhost:8000/images/";
    const { user } = useContext(Context);

    const handleDelete = async () => {
        try {
            await axios.delete("http://localhost:8000/post/del/" + post._id, {
                data: {
                    username: user.username,
                }
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8000/post/update/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img
                        className="singlePostImg"
                        src={PF + post.photo}
                        alt=""
                    />
                }
                {
                    updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> :
                        (
                            <h1 className="singlePostTitle">
                                {title}

                                {post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                    </div>
                                )}
                            </h1>
                        )}
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
                {updateMode ? (
                    <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p className="singlePostDesc">
                        {desc}
                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}

export default SinglePost;