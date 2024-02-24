import { Suspense } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Layout;