import {UserObjectType} from "./UserTypes";


export interface GroupType{
    id: string,
    tittle: string,
    groupsUsers: UserObjectType[]
}

export interface RepositoryType{
    id: string,
    tittle: string,
    url: string
}
export interface ProjectType{
    name: string,
    id: string,
    groups: GroupType[],
    users: UserObjectType[],
    repositories: RepositoryType[]
}

interface GetProjectAction{
    type: ProjectUserTypes.GET_PROJECT,
    project: ProjectType,
    message: string,
    status: number,
    error: null | string
}
interface GetProjectsAction{
    type: ProjectUserTypes.GET_PROJECTS,
    projects: ProjectType[],
    message: string,
    status: number,
    error: null | string
}

export interface ProjectState{
    projects: ProjectType[],
    project: ProjectType,
    loading: boolean;
    error: null | number;
    message: null | string;
}

export type ProjectAction = GetProjectsAction | GetProjectAction;


export enum ProjectUserTypes {
    GET_PROJECTS = "GET_PROJECTS",
    GET_PROJECT = "GET_PROJECT",
    /*EDIT_PROJECT = "EDIT_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",*/
}