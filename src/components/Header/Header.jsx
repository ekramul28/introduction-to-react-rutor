import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/HOme";

const Header = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;