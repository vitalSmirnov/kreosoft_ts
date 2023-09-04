
import { IRoute } from './shared/types';
import React from "react";


const Users = React.lazy(() => import('./Pages/Users/UsersPage'));
const Projects = React.lazy(() => import('./Pages/Projects/ProjectsPage'));

export const protectedRoutes: Array<IRoute> = [
    {
        path: '/users/',
        title: 'Пользователи',
        element: <Users/>
    },
    {
        path: '/projects/',
        title: 'Проекты',
        element: <Projects/>,
    },
];

