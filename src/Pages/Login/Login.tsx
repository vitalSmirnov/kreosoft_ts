import {Layout, Row, Col, Divider, Spin} from "antd";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import "./login.css"
import {useAppSelector} from "../../hooks/redux";
import {LoginFormComponent} from "../../Components/LoginFormComponent";
import {LoginIconsComponent} from "../../Components/LoginIconsComponent";
import {NewsComponent} from "../../Components/NewsComponent";
import {DailyBotComponent} from "../../Components/DailyBotComponent";

export const Login = () => {

    const navigate = useNavigate();
    const {error, token, isLoading} = useAppSelector(state => state.authReducer);


    useEffect(() => {
        if (token !== null && error === 'success'){
            navigate("/users")
        }
    }, [token]);


    return (
      <>
          {isLoading && <Spin/>}
          {!isLoading &&
          <Layout>
              <Row>
                  <Col span={8}>
                      <LoginFormComponent />
                      <LoginIconsComponent/>
                  </Col>
                  <Col span={16}>
                      <DailyBotComponent news={[]}/>
                      <NewsComponent news={[]}/>
                  </Col>
              </Row>
          </Layout>}
          </>
    );
}