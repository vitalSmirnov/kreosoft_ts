import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProjectModel} from "../../models/IProject";
import {fetchProject, fetchProjects} from "../actionCreators/projectActionCreator";


interface ProjectState{
    projects: ProjectModel[],
    project: ProjectModel,
    isLoading: boolean,
    error: string
}


const initialState: ProjectState = {
    projects: [],
    project: {
        name: "",
        id: "",
        groups: [],
        users: [],
        repositories: []
    },
    isLoading: false,
    error: ''
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProject.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [fetchProject.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchProject.pending.type]: (state, action: PayloadAction<ProjectModel>)=> {
            state.project = action.payload;
            state.isLoading = false;
            state.error = '';
        },

        [fetchProjects.pending.type]: (state)=> {
            state.isLoading = true;
        },
        [fetchProjects.rejected.type]: (state, action: PayloadAction<string>)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchProjects.pending.type]: (state, action: PayloadAction<ProjectModel[]>)=> {
            state.projects = action.payload;
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default projectSlice.reducer;