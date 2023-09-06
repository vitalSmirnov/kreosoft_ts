import React, {useState} from "react";
import {Button, Col, Form, Input, Modal, Row} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {RepositoryModel} from "../../models/IProject";


export const EditRepositoryModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = async (values : RepositoryModel) => {
        console.log(values)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type={"primary"} onClick={showModal} icon={<PlusOutlined />}/>
            <Modal open={isModalOpen} title={"Добавить репозиторий"} onCancel={handleCancel}  width={600} footer={false}>
                <Col span={24}>
                    <Row>
                        <Form
                            className={"input-field"}
                            autoComplete="off"
                            layout={"vertical"}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className={"width-100"}
                                label='Название репозитория'
                                name="tittle"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item
                                label='Gitlab url'
                                name="URL"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType={"submit"} className={"btn-margin"} block type={"primary"}>Добавить репозиторий</Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Modal>
        </>
    );
}