import {Button, Form, Input} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
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
                                        noStyle
                                    >
                                        <Input placeholder="Вопрос" />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <span>Вопрос</span>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}>
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>
        </>
    );}