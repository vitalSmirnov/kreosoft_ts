import {Button, Col, Form, Input, Row} from "antd";
import {DeleteOutlined, MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import React from "react";


export const QuestionDynamicComponent = () => {
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
                    name="Questions"
                    rules={[
                        {
                            validator: async (_, names) => {
                                if (!names || names.length < 1) {
                                    return Promise.reject(new Error('At least 1 question'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    label={'Вопрос'}
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
                                                message: "Введите текст вопроса",
                                            },
                                        ]}
                                    >
                                        <Row >
                                            <Col span={22}>
                                                <Input placeholder="Вопрос" />
                                            </Col>
                                            <Col span={2} className={"display-flex justify-content-right"}>
                                                {fields.length > 1 ? (
                                                    <Button
                                                        className={"dynamic-delete-button red"}
                                                        icon={<DeleteOutlined/>}
                                                        onClick={() => remove(field.name)}>
                                                    </Button>
                                                ): null}
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <span className={"project-label"} >Вопросы: </span>
                                <Button
                                    type="primary"
                                    onClick={() => add()}
                                    icon={<PlusOutlined/>}>
                                    {fields.length > 0 ? "Добавить вопрос" : ""}
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>
        </>
    );}