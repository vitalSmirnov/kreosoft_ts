import {Spin} from "antd";
import {Navbar} from "../Components/Navbar";
import {Outlet} from "react-router-dom"
import {Suspense, useEffect} from "react";

export const MainLayout = () => {

    useEffect(()=>{
        if (sessionStorage.getItem("token") === null && localStorage.getItem("token") !== null) {
            let tokenData = JSON.parse(localStorage.getItem("token") || "")
            sessionStorage.setItem("token", tokenData);
        }
    }, [])

    return (
        <>
            <Navbar/>
            <Suspense fallback={<Spin className="main-loader" />}>
                <Outlet />
            </Suspense>
        </>
    )
}