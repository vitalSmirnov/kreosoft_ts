import {Button, Checkbox, Col, Divider, Form, Input, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {UserRegisterModel} from "../models/IUser";
import {login} from "../store/actionCreators/authActionCreator";
import {useAppDispatch} from "../hooks/redux";
import {useNavigate} from "react-router-dom";


export const LoginFormComponent = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onFinish = (values: UserRegisterModel) =>{
        dispatch(login(values));
    };

    const signinHandle = () => {
        navigate("/register")
    };

    return(
            <Row className={"background-light container-left min-height-55"}>
                <Col span={24}>
                    <Row>
                        <span className={"header"}>Войти</span>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={24}>
                            <Form
                                initialValues={{ remember: false }}
                                autoComplete="off"
                                layout={"vertical"}
                                onFinish={onFinish}
                            >
                                <Row className={"input-row news-links"}>
                                    <Form.Item
                                        label='Электронная почта'
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Введите Email',
                                            },
                                        ]}
                                    >
                                        <Input className={"input-field"}  type={"text"} placeholder={"example@gmail.com"}/>
                                    </Form.Item>
                                </Row>
                                <Row className={"input-row news-links"}>
                                    <Form.Item
                                        label='Пароль'
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Введите пароль',
                                            },
                                        ]}
                                    >
                                        <Input.Password className={"input-field"} type={"password"}
                                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        />
                                    </Form.Item>
                                </Row>
                                <Row className={"input-row"}>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                    >
                                        <Checkbox>Запомнить меня</Checkbox>
                                    </Form.Item>
                                </Row>
                                <Divider/>
                                <Form.Item>
                                    <Button htmlType={"submit"} className={"btn-margin"} block type={"primary"}>Войти</Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button className={"btn-margin"} block onClick={signinHandle} type={"default"}>Зарегистрироваться</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
    )
}