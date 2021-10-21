import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="heading">BLOGGY</span>
                <span className="description">A New World of Blogs</span>
            </div>
            <img
                className="headerImg"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
        </div>
    );
}

export default Header;