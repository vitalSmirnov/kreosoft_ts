import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Button, Col, DatePicker, Form, Input, Row} from 'antd';
import ButtonGroup from "antd/es/button/button-group";
import {QuestionDynamicComponent} from "./QuestionDynamicComponent";


export const PollDynamicComponent = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    return (
        <>
        <Form
            name="dynamic_form_item"
            onFinish={onFinish}
        >
            <Form.List
                name="polls"
                rules={[
                    {
                        validator: async (_, names) => {
                            if (!names || names.length < 1) {
                                return Promise.reject(new Error('At least 1 poll'));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                label={<span>Опрос</span>}
                                required={true}
                                key={field.key}
                            >
                                <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "",
                                        },
                                    ]}
                                    noStyle
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
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                                <QuestionDynamicComponent/>
                            </Form.Item>
                        ))}
                        <span>Опросники</span>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            style={{ width: '60%' }}
                            icon={<PlusOutlined />}>
                        </Button>
                    </>
                )}
            </Form.List>
        </Form>
        </>
    );
};