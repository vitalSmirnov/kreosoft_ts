import {Button, Col, DatePicker, Form, Input, Row} from "antd";
import ButtonGroup from "antd/es/button/button-group";

export const PollComponent = () => {


    return (
        <>
            <Col className={"bordered-container"} span={24}>
                <Form
                    autoComplete={"off"}
                    layout={"vertical"}
                >
                    <Row>
                        <Col span={16} className={"col-right-padding"}>
                            <Form.Item
                                label={"Заголовок"}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={8} className={"col-left-padding"}>
                            <Form.Item
                                label={"ID канала"}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                            <Form.Item
                                label={"Тип расписания"}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <ButtonGroup>
                                    <Button type={"primary"}>Ежедневно</Button>
                                    <Button>Еженедельно</Button>
                                </ButtonGroup>
                            </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item
                            label={"Время НН:ММ"}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker/>
                        </Form.Item>
                    </Row>
                </Form>
            </Col>
        </>
    )
}