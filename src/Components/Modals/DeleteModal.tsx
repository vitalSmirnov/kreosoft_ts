import {useState} from "react";
import {Button, Col, Modal, Row} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {DeleteType} from "../../Reducers/types/deleteTypes";


export const DeleteModal = (props: DeleteType) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = () => {
        props.deleteFunction(props.id);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal} danger icon={<DeleteOutlined />}/>
            <Modal open={isModalOpen} onCancel={handleCancel} onOk={onFinish}  width={600}>
                <Col span={24}>
                    <Row>
                        <span className={"user-delete-question"}>Хотите удалить {props.name}?</span>
                    </Row>
                </Col>
            </Modal>
        </>
    );
}