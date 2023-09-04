import React, {Suspense} from 'react';
import {Spin} from "antd";
import "./App.css"
import {Navigate, useRoutes} from "react-router-dom";
import {protectedRoutes} from "./Routes";

import {Login} from "./Pages/Login/Login";
import {Signin} from "./Pages/Signin/Signin";
import {MainLayout} from "./Pages/MainLayout";

const createRoutes = () => [
  {
    path: '/',
    element: sessionStorage.getItem("token") || localStorage.getItem("token") ? <MainLayout /> : <Navigate to="/login" />,
    children: protectedRoutes,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signin />,
  },
];

const App: React.FC = () => {
  const customRouter = useRoutes(createRoutes());

  return (
      <div className="App">
        <Suspense fallback={<Spin />}>{customRouter}</Suspense>
      </div>
  );
};



export default App;
