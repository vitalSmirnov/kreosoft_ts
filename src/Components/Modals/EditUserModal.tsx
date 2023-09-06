import {useState} from "react";
import {Button, Col, Form, Input, Modal, Row} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {UseActions} from "../../hooks/UseActions";
import {IUser, UserEditModel} from "../../models/IUser";
import {useAppDispatch} from "../../hooks/redux";
import {editUser, fetchUser} from "../../store/actionCreators/userActionCreator";


export const EditUserModal = (props: IUser) => {
    const useActions = UseActions();
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userNameArray = props.name.split(" ")
    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = async (values: IUser) => {
        const payload : UserEditModel = {
            firstName: userNameArray[0],
            secondName: userNameArray[1],
            thirdName: userNameArray[2],
            gitlabId: values.gitlabId,
            discordId: values.discordId,
            id: props.id
        }
        await dispatch(editUser(payload));
        dispatch(fetchUser(payload.id))
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal} icon={<EditOutlined />}/>
            <Modal open={isModalOpen} onCancel={handleCancel}  width={600} footer={false}>
                <Col span={24}>
                    <Row>
                        <span className={"user-image-name"}>Редактировать пользователя</span>
                    </Row>
                    <Row>
                        <Form
                            className={"input-field"}
                            initialValues={{
                                secondName: userNameArray[1],
                                firstName: userNameArray[0],
                                thirdName: userNameArray[2]? userNameArray[2]: "",
                                discordId: props.discordId,
                                gitlabId: props.gitlabId
                            }}
                            autoComplete="off"
                            layout={"vertical"}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className={"width-100"}
                                label='Фамилия'
                                name="secondName"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item
                                label='Имя'
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item
                                label='Отчество'
                                name="thirdName"
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item
                                label='Discord Id'
                                name="discordId"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item
                                label='Gitlab Id'
                                name="gitlabId"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type={"text"}/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType={"submit"} className={"btn-margin"} block type={"primary"}>Отредактировать</Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Modal>
        </>
    );
}