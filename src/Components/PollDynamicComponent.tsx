import React, {useState} from 'react';
import {DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Col, Form, Input, Row} from 'antd';
import ButtonGroup from "antd/es/button/button-group";
import {QuestionDynamicComponent} from "./QuestionDynamicComponent";
import {ScheduleDynamicType} from "./ScheduleDynamicType";
import {IScheduleType} from "../models/IScheduleType";


export const PollDynamicComponent = () => {
    const [scheduleType, scheduleTypeChanger] = useState(IScheduleType.daily);
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    const scheduleTypeHandler = () => {
        scheduleType === IScheduleType.daily? scheduleTypeChanger(IScheduleType.weekly): scheduleTypeChanger(IScheduleType.daily)
    }

    return (
        <>
        <Form
            className={"display-column poll-justify"}
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
                            if (!names || names.length > 4) {
                                return Promise.reject(new Error('max 4 polls'));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                required={true}
                                key={field.key}
                                className={"poll-border"}
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
                                >
                                    <Row>
                                        <Col span={16} className={"col-right-padding"}>
                                            <Form.Item
                                                label={"Заголовок"}
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}>
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={6} className={"col-left-padding"}>
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
                                        <Col span={2} className={"display-flex justify-content-right"}>
                                            <Form.Item>
                                                {fields.length > 1 ? (
                                                    <Button
                                                        className={"dynamic-delete-button red"}
                                                        icon={<DeleteOutlined/>}
                                                        onClick={() => remove(field.name)}>
                                                    </Button>
                                                ): null}
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
                                                <Button type={scheduleType === IScheduleType.daily ? "primary" : "default"}
                                                        onClick={scheduleTypeHandler}
                                                >
                                                    Ежедневно
                                                </Button>
                                                <Button type={scheduleType === IScheduleType.weekly ? "primary" : "default"}
                                                        onClick={scheduleTypeHandler}
                                                >
                                                    Еженедельно
                                                </Button>
                                            </ButtonGroup>
                                        </Form.Item>
                                    </Row>
                                    <Row>
                                        <ScheduleDynamicType type={scheduleType}/>
                                    </Row>
                                </Form.Item>
                                <QuestionDynamicComponent/>
                            </Form.Item>
                        ))}
                        <Button
                            className={"padding-btn"}
                            type="primary"
                            onClick={() => add()}
                            icon={<PlusOutlined />}>
                            {fields.length > 0?'Добавить опросник':''}
                        </Button>
                    </>
                )}
            </Form.List>
        </Form>
        </>
    );
};