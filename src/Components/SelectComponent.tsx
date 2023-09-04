import React, {useEffect, useState} from "react";
import {Button, Col, Divider, Input, List, Row, Space} from "antd";
import {BtnState, SelectProps} from "../Reducers/types/UserTypes";


export const SelectComponent = ({selectCallback, createCallback, objects}: SelectProps ) => {
    const [value, setValue] = useState("");
    const [btnState, setBtnState] = useState(BtnState.default);
    const [searchArray, setSearchArray] = useState(objects);
    const onSearch = (value:string) => {
        setValue(value);
    }

    const handleAddBtn =() => {
        createCallback();
        setBtnState( btnState === BtnState.active? BtnState.default: BtnState.active);
    }

    useEffect(() => {
        setSearchArray(
            objects.filter((item : any) =>
                item.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    }, [objects, value]);


    return (
        <>
            <Space.Compact block className={"user-container background-light"}>
                <Col span={24}>
                    <Row>
                        <Col span={16}>
                            <Input onChange={(e) => onSearch(e.target.value)} type={"text"} placeholder={"Поиск"}/>
                        </Col>
                        <Col span={8} className={"flex-center"}>
                            <Button type={btnState} onClick={handleAddBtn}>Добавить</Button>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <List className={"search-array"}>
                            {searchArray.map((item)=> {
                                return(
                                  <List.Item key={item.id}>
                                      <a href="/#" className={"object-link-non-decorate light-text"} onClick={() => selectCallback(item.id)}>{item.name}</a>
                                  </List.Item>
                                );
                            })}
                        </List>
                    </Row>
                </Col>
            </Space.Compact>
        </>
    );
}