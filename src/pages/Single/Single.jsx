import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SignlePost';
import './Single.css';

const Single = () => {
    return ( 
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
     );
}
 
export default Single;