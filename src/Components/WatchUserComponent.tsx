import {Space, Col, Row} from 'antd';
import {EditUserModal} from "./Modals/EditUserModal";
import {DeleteModal} from "./Modals/DeleteModal";
import {EditRepositoryModal} from "./Modals/EditRepositoryModal";

interface UserObject {
    user: {
        name: string
        discordId: string,
        gitlabId: string,
        id: string
    },
    deleteAction: any
}

export const WatchUserComponent = ({user, deleteAction} : UserObject) => {

    return(
        <Space.Compact block className={"user-container background-light"}>
            <Col span={22}>
                <Row>
                    <span className={"user-image-name"}>{`${user.name}`}</span>
                </Row>
                <Row className={"lines-font-padding"}>
                    <span> Discord ID : {user.discordId}</span>
                </Row>
                <Row className={"lines-font-padding"}>
                    <span> Gitlab ID : {user.gitlabId}</span>
                </Row>
            </Col>
            <Col span={2} className={"items-align margin-initial"}>
                <EditUserModal name={user.name} discordId={user.discordId} gitlabId={user.gitlabId} id={user.id}/>
                <DeleteModal name={user.name} id={user.id} deleteFunction={deleteAction}/>
            </Col>
        </Space.Compact>
    );
}