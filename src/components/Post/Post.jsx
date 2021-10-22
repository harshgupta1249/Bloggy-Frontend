import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem Ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptates corrupti blanditiis saepe asperiores odit suscipit assumenda totam doloribus quia quidem nisi perferendis quae dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam blanditiis vitae et fuga reiciendis odio dicta ipsum consectetur reprehenderit nisi.
            </p>
        </div>
    );
}

export default Post;