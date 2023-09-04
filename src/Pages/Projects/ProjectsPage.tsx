import React, {useEffect, useState} from "react";
import {SelectComponent} from "../../Components/SelectComponent";
import {Layout, Row, Col} from "antd";
import {UseActions} from "../../hooks/UseActions";
import {useTypedSelector} from "../../hooks/SelectorHook";
import {AddProjectComponent} from "../../Components/AddProjectComponent";

import "./ProjectPage.css"
import {WatchProjectComponent} from "../../Components/WatchProjectComponent";
const ProjectsPage : React.FC = () => {

    enum ActionType{
        Default,
        AddProject,
        SelectProject
    }

    const [stateAction, setStateAction] = useState(ActionType.Default);
    const useActions = UseActions();
    const {project, projects} = useTypedSelector((state) => state.projects);

    useEffect(()=> {
        useActions.ProjectsActionCreators();
    }, [stateAction])

    const selectProjectCallback = (id : string) => {
        useActions.ProjectActionCreator(id);
        setStateAction(ActionType.SelectProject)
    };

    const addProjectCallback = () => {

        setStateAction(ActionType.AddProject)
    };

    return (
        <Layout className={"width-100"}>
            <Row className={"container-wrapper"}>
                <span className={"users-header"}>Проекты</span>
            </Row>
            <Row>
                <Col span={8} className={"container-wrapper"}>
                    <SelectComponent selectCallback={selectProjectCallback} createCallback={addProjectCallback} objects={projects}/>
                </Col>
                <Col span={16} className={"container-wrapper"}>
                    {
                        stateAction === ActionType.AddProject? <AddProjectComponent/>:
                        stateAction === ActionType.SelectProject? <WatchProjectComponent deleteAction={(id) => useActions.DeleteUserActionCreators(id)} key={project.id} project={project}/> :
                            <></>
                    }
                </Col>
            </Row>
        </Layout>

    );
}

export default ProjectsPage;