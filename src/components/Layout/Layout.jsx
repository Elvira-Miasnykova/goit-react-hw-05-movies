import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
}