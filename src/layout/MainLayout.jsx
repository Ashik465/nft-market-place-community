import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared pages/navbar/Navbar";
import Footer from "../pages/shared pages/footer/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;