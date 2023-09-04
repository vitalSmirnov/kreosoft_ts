import {Button, Col, Divider, Form, Input} from "antd";


export const AddUserComponent = () => {


    return(
        <>
            <div className={"user-container background-light"}>
                <span className={"header"}>Добавить пользователя</span>
                <Divider/>
                <Col>
                    <Form layout="vertical">
                        <Form.Item label={"Фамилия"} required>
                            <Input placeholder={"Фамилия"} />
                        </Form.Item>
                        <Form.Item label={"Имя"} required>
                            <Input placeholder={"Имя"} />
                        </Form.Item>
                        <Form.Item label={"Отчество"}>
                            <Input placeholder={"Иванович"} />
                        </Form.Item>
                        <Form.Item label="Discord Id" required>
                            <Input placeholder="Discord Id"/>
                        </Form.Item>
                        <Form.Item label="GitLab Id" required>
                            <Input placeholder="GitLab Id"/>
                        </Form.Item>
                        <Divider/>
                        <Button className={"btn-margin"} block type={"primary"}>Добавить</Button>
                    </Form>
                </Col>
            </div>
        </>
    );
}