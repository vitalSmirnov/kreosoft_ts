import {Button, Space,  Col, Divider, Form, Input, List, Row} from "antd";
import {useState} from "react";
import {SelectUsersComponent} from "./SelectUsersComponent";


export const AddProjectComponent = () => {
    const [tittle, setTittle] = useState("");
    return(
        <>
            <div className={"user-container background-light"}>
                <span className={"project-header-label"}>Создать проект</span>
                <Form layout="vertical">
                    <Form.Item className={"project-label"} label={"Название"} required>
                        <Input value={tittle} onChange={(e) => setTittle(e.target.value)}/>
                    </Form.Item>
                </Form>
                <Divider/>
                <Col span={24}>
                    <Row className={"width-100"}>
                        <Space.Compact block direction={"vertical"}>
                            <span className={"project-header-label"} >Группы: </span>
                            <List bordered>
                            </List>
                        </Space.Compact>
                    </Row>
                    <Divider/>
                    <Row className={"width-100"}>
                        <SelectUsersComponent selectedUsers={[]}/>
                    </Row>
                    <Divider/>
                    <Row className={"width-100"}>
                        <Space.Compact block direction={"vertical"}>
                            <span className={"project-header-label"}>Репозитории: </span>
                            <List bordered>
                            </List>
                        </Space.Compact>
                    </Row>
                </Col>
                <Divider/>
                <Button block type={"primary"}>Добавить новый проект</Button>
            </div>
        </>
    );
}