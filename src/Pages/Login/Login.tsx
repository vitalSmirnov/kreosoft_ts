import {Layout, Row, Col, Input, Button, Checkbox, Divider, Form} from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import "./login.css"
import {ILogin} from "../../shared/api/AuthApi";
import {UseActions} from "../../hooks/UseActions";
import {useTypedSelector} from "../../hooks/SelectorHook";

export const Login = () => {

    const navigate = useNavigate();
    const {loginUserActionCreator} = UseActions();
    const {message} = useTypedSelector((state) => state.authorization);

    const signinHandle = () => {
        navigate("/register")
    };

    const onFinish = (values: ILogin) =>{
        loginUserActionCreator(values)
    };

    useEffect(()=> {
        if(message === "success"){
            navigate("/users")
        }
    }, [message])

    return (
      <>
          <Layout>
              <Row>
                  <Col span={8}>
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
                      <div className={"container-icons"}>
                          <div className={"icons-vertical background-light"}>
                              <img alt={"gitlab"} src={"/gitlab.png"} className={"icon"}/>
                              <img alt={"github"} src={"/github.png"} className={"icon"}/>
                          </div>
                          <div className={"icons-horizontal background-light"}>
                              <img alt={"android"} src={"/android.png"} className={"icon"}/>
                              <img alt={"ios"} src={"/ios.png"} className={"icon"}/>
                              <img alt={"windows"} src={"/windows.png"} className={"icon"}/>
                          </div>
                      </div>
                  </Col>
                  <Col span={16}>
                      <Row className={"background-light container-right min-height-65"}>
                          <span className={"daily-header"}>DailyBot</span>
                          <Divider/>
                          <div className={"container"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi consectetur, consequatur cum cupiditate est, excepturi ipsam iste laborum molestiae nulla odit quas veniam. Ad, alias culpa cupiditate debitis earum fugit hic itaque magni odio rem, sapiente sint tenetur ullam vitae voluptatibus. Assumenda consequuntur culpa iusto modi neque soluta voluptate?</p>
                          </div>
                      </Row>
                      <Row className={"background-light container-right min-height-20"}>
                          <span className={"header"}>Новости:</span>
                          <Divider/>
                          <div className={"container news-links"}>
                              <a className={"news-link-item"}>Lorem ipsum dolor sit amet.</a>
                              <a className={"news-link-item"}>Новый релиз</a>
                          </div>
                      </Row>
                  </Col>
              </Row>


          </Layout>
      </>
    );
}