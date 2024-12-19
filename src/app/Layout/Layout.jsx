import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

