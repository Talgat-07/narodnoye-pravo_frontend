import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header/Header";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <>
           <Header/>
           <Outlet/>
           <Footer/>
        </>
    );
};

