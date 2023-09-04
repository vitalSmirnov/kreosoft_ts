import {Layout, Spin} from "antd";
import {Navbar} from "../Components/Navbar";
import {Outlet} from "react-router-dom"
import {Suspense, useEffect} from "react";


export const MainLayout = () => {

    useEffect(()=>{
        if(sessionStorage.getItem("token") === null){
            // @ts-ignore
            sessionStorage.setItem("token", localStorage.getItem("token"));
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