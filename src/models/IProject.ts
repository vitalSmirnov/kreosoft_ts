import {IUser} from "./IUser";


export interface GroupModel{
    id: string,
    tittle: string,
    groupsUsers: IUser[]
}

export interface RepositoryModel{
    id: string,
    tittle: string,
    url: string
}
export interface ProjectModel{
    name: string,
    id: string,
    groups: GroupModel[],
    users: IUser[],
    repositories: RepositoryModel[]
}

interface GetProjectAction{
    type: ProjectUserTypes.GET_PROJECT,
    project: ProjectModel,
    message: string,
    status: number,
    error: null | string
}
interface GetProjectsAction{
    type: ProjectUserTypes.GET_PROJECTS,
    projects: ProjectModel[],
    message: string,
    status: number,
    error: null | string
}

export interface ProjectState{
    projects: ProjectModel[],
    project: ProjectModel,
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