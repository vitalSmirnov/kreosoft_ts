import {Button, Col, Form, Input, Modal, Row} from "antd";
import {EditOutlined, EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {SelectUsersComponent} from "../SelectUsersComponent";
import React, {useState} from "react";
import FormItemLabel from "antd/es/form/FormItemLabel";
import {PollComponent} from "../PollComponent";

interface IGroupProps{
    groups: any[],
    selectedUsers: any[]
}

export const EditGroupModal = ({groups, selectedUsers} : IGroupProps) => {

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
                        <PollComponent polls={[]}/>
                    </Row>
                </Col>

            </Modal>
        </>
    );
}