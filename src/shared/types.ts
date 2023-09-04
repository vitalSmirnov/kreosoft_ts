import {ReactElement } from 'react';

export interface IRoute {
    path: string;
    element?: ReactElement<any, any>;
    icon?: ReactElement<any, any>;
    title?: string;
    children?: IRoute[];
    permission?: string;
    hideInMenu?: boolean;
}