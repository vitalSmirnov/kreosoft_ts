import {Button, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {SelectUsersComponent} from "../SelectUsersComponent";
import {useState} from "react";


interface IEditUsersProps {
    selectedUsers : any[]
}

export const EditUsersInProjectModal = ({selectedUsers} : IEditUsersProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Button type={"primary"} onClick={() => setIsModalOpen(true)} icon={<EditOutlined />}/>
            <Modal open={isModalOpen} onCancel={handleCancel}  width={900} footer={false} closeIcon={true}>
                <SelectUsersComponent selectedUsers={selectedUsers}/>
                <Button className={"margin-top"} type={"primary"} block>Изменить пользователей</Button>
            </Modal>
        </>
    );
}