import './HomePage.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const HomePage = () => {
    return ( 
        <>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
        </>
     );
}
 
export default HomePage;