
import {Button, Col, Divider, Empty, List, Row, Space} from "antd";import {DeleteModal} from "./Modals/DeleteModal";
import {EditRepositoryModal} from "./Modals/EditRepositoryModal";
import {EditUsersInProjectModal} from "./Modals/EditUsersInProjectModal";
import {EditGroupModal} from "./Modals/EditGroupModal";
import {ProjectModel} from "../models/IProject";

interface ProjectProps{
    project: ProjectModel,
    deleteAction(id: string) : void
}
export const WatchProjectComponent = ({project, deleteAction}: ProjectProps) => {



    return (
        <div className={"user-container background-light"}>
                <div className={"list-items-justify"}>
                    <span className={"project-header-label"}>{project.name}</span>
                    <DeleteModal name={project.name} id={project.id} deleteFunction={deleteAction}/>
                </div>
            <Divider/>
            <Col span={24}>
                <Row className={"display-column"}>
                    <div className={"display-flex"}>
                        <span className={"project-header-label"}>Группы: </span>
                        <Space className={"margin-initial"}>
                            <EditGroupModal groups={[]} users={[]} id={""} name={""} repositories={[]}/>
                        </Space>
                    </div>
                    <List bordered className={"width-100 min-h-container"}>
                        {project.groups.length > 0? project.groups.map((item) => {
                            return <List.Item key={item.id}>
                                <span>{item.tittle}</span>
                            </List.Item>
                        }): <Empty/>}
                    </List>
                </Row>
                <Divider/>
                <Row className={"display-column"}>
                    <div className={"display-flex"}>
                        <span className={"project-header-label"}>Пользователи: </span>
                        <Space className={"margin-initial"}>
                            <EditUsersInProjectModal selectedUsers={project.users}/>
                        </Space>
                    </div>
                    <List bordered className={"width-100 min-h-container"}>
                        {project.users.length > 0? project.users.map((item) => {
                            return <List.Item key={item.id}>
                                <span>{item.name}</span>
                            </List.Item>
                        }): <Empty/>}
                    </List>
                </Row>
                <Divider/>
                <Row className={"display-column"}>
                    <div className={"display-flex"}>
                        <span className={"project-header-label"}>Репозитории: </span>
                        <Space className={"margin-initial"}>
                            <EditRepositoryModal/>
                        </Space>
                    </div>
                    <List bordered className={"width-100 min-h-container"}>
                        {project.repositories.length > 0? project.repositories.map((item) => {
                            return <List.Item key={item.id}>
                                <div className={"display-column"}>
                                    <span className={"repository-label"}>{item.tittle}</span>
                                    <span>URL: <a href={item.url}>{item.url}</a></span>
                                </div>
                            </List.Item>
                        }): <Empty/>}
                    </List>
                </Row>
            </Col>
            <Divider/>
            <Button block type={"primary"}>Отредактировать проект</Button>
        </div>
    );
}