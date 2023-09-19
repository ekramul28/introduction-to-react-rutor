import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
    return (
        <div>

            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to='/users'>Users</Link>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact uS</a> */}
            </nav>
        </div>
    );
};

export default Home;