import {Form, Col, Input, Button, Divider, Layout} from "antd";
import {useNavigate} from "react-router-dom";
import "./Signin.css"
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {useState} from "react";

export const Signin = () => {
    const [visible, setVisible] = useState(false);

    setTimeout(() => {
        setVisible(true)
    }, 200)

    const navigate = useNavigate();

    const loginHandle = () => {
        navigate("/login")
    };

    return (
        <>
            <Layout className={"main-container"}>
                <div className={"container background-light"}>
                    <span className={"header"}>Зарегистрироваться</span>
                    <Divider/>
                    <Col>
                        <Form layout="vertical">
                            <Form.Item label={"Логин"} required>
                                <Input placeholder={"Логин"} />
                            </Form.Item>
                            <Form.Item label={"Email"} required>
                                <Input placeholder={"Email"} type={"email"}/>
                            </Form.Item>
                            <Form.Item label={"ФИО"} required>
                                <Input placeholder={"Иван Иванов Иванович"} />
                            </Form.Item>
                            <Form.Item label="Discord Id">
                                <Input placeholder="Discord Id"/>
                            </Form.Item>
                            <Form.Item label="GitLab Id">
                                <Input placeholder="GitLab Id"/>
                            </Form.Item>
                            <Form.Item label="Пароль" required>
                                <Input.Password type={"password"}
                                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>
                            <Form.Item label="Повторите пароль" required>
                                <Input.Password type={"password"}
                                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>
                            <Divider/>
                            <Button className={"btn-margin"} block type={"primary"}>Зарегистрироваться</Button>
                            <Button className={"btn-margin"} block onClick={loginHandle} type={"default"}>Войти</Button>
                        </Form>
                    </Col>
                </div>
                <img className={`${visible?"visible-right":""} animate-icon-1`} alt={"web"} src={"/webDev.png"}/>
                <img className={`${visible?"visible-left":""} animate-icon-2`} alt={"mobile"} src={"/mobileDev.png"}/>
            </Layout>
        </>
    );
}