import {ProjectAction, ProjectState, ProjectUserTypes, ProjectType} from "./types/projectTypes";


const initialState: ProjectState = {
    project: {} as ProjectType,
    projects: [],
    loading: false,
    message: "",
    error: null,
}




export function projectReducer(state= initialState, action : ProjectAction) : ProjectState {
    const newState = {...state}
    switch(action.type){
        case ProjectUserTypes.GET_PROJECTS:
            newState.projects = action.projects;
            return newState;
        case ProjectUserTypes.GET_PROJECT:
            console.log(action.project)
            newState.project = action.project;
            return newState;
        default:
            return newState;
    }
}
