import {Button, Col, Form, Input, Modal, Row} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {SelectUsersComponent} from "../SelectUsersComponent";
import React, {useState} from "react";
import {PollComponent} from "../PollComponent";
import {ProjectModel} from "../../models/IProject";



export const EditGroupModal = ({users, groups, id, name} : ProjectModel) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return(
        <>
            <Button type={"primary"} onClick={() => setIsModalOpen(true)} icon={<EditOutlined />}/>
            <Modal title={"Новая группа"} open={isModalOpen} onCancel={handleCancel}  width={900} footer={false}>
                <Col span={24}>
                    <Row>
                        <Form layout={"vertical"} className={"width-100"}>
                            <Form.Item
                                label='Название группы'
                                name="tittle"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Введите название',
                                    },

                                ]}
                            >
                                    <Input type={"text"}/>
                            </Form.Item>
                        </Form>
                    </Row>
                    <Row>
                        <SelectUsersComponent selectedUsers={selectedUsers}/>
                    </Row>
                    <Row>
                        <PollComponent/>
                    </Row>
                </Col>

            </Modal>
        </>
    );
}