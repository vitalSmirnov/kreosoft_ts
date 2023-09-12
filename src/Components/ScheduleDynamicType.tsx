import {DatePicker, Divider, Form, Input, Row, Space} from "antd";
import React from "react";
import {IScheduleType, IScheduleTypeProps, IWeeklyType} from "../models/IScheduleType";


export const ScheduleDynamicType = (type : IScheduleTypeProps) => {

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };


    return (
        <>

            <Form
                name="dynamic_form_item"
                onFinish={onFinish}>
                {
                    type.type === IScheduleType.daily?
                        (
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
                        ):
                        (
                            <Row>
                                <Form.Item
                                    label={"Недельный интервал"}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Divider/>
                                <label className={"project-header-label"}>Дни недели: </label>
                                <Space size={[8, 16]} wrap>
                                    {IWeeklyType.map((value, index) => (
                                        <div className={'display-column'}>
                                            <span>{value.name}</span>
                                            <DatePicker/>
                                        </div>
                                    ))}
                                </Space>
                            </Row>
                        )
                }
            </Form>
        </>
);
}