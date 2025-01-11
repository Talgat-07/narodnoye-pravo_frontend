import { Footer } from "widgets/Footer/Footer";
import { Header } from "widgets/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Breadcrumbs } from "shared/ui/Breadcrumbs/Breadcrumbs";
import styles from './Layout.module.scss'
import { UpButton } from "shared/ui/UpButton/UpButton";

export const Layout = () => {

    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Breadcrumbs />
            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </Suspense>
            <UpButton />
            <Footer />
        </div>
    );
};

