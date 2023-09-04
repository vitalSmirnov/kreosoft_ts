import {Dispatch} from "redux";
import {projectApi} from "../../shared/api/ProjectApi";
import {ProjectAction, ProjectUserTypes} from "../types/projectTypes";

export const ProjectsActionCreators = () => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        await projectApi.projects()
            .then((response) => {
                dispatch({
                    message: "",
                    type: ProjectUserTypes.GET_PROJECTS, status: response.status, error: null, projects: response.data})
            })
            .catch((e) => {
                dispatch({message: e.statusText, type: ProjectUserTypes.GET_PROJECTS, projects: [], error: e.error, status: e.status  })
            })
    }
}

export const ProjectActionCreator = (id: string) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        await projectApi.project(id)
            .then((response) => {
                dispatch({message: "", type: ProjectUserTypes.GET_PROJECT, status: response.status, error: null, project: response.data})
            })
            .catch((e) => {
                dispatch({message: e.statusText, type: ProjectUserTypes.GET_PROJECT, project: {
                        id: "",
                        name: "",
                        groups: [],
                        repositories: [],
                        users: []
                    }, error: e.error, status: e.status  })
            })
    }
}