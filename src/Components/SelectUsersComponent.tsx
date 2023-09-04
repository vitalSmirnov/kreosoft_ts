import {Button, Checkbox, Col, Empty, Input, List, Radio, Row} from "antd";
import {SearchOutlined, CloseOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {UseActions} from "../hooks/UseActions";
import {useTypedSelector} from "../hooks/SelectorHook";

interface ISelectedProps{
    selectedUsers: any[]
}

export const SelectUsersComponent = ({selectedUsers} : ISelectedProps) => {
    const useActions = UseActions();
    const {users} = useTypedSelector((state) => state.users);
    const [searchValue, setSearchValue] = useState("");
    const [searchArray, setSearchArray] = useState(users);

    const onSearch = (value:string) => {
        setSearchValue(value);
    }

    useEffect(()=> {
        useActions.UsersActionCreators();
    }, [useActions])

    useEffect(() => {
        setSearchArray(
            users.filter((item : any) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue]);

    return(
        <>
            <Col span={24}>
                <Row className={"row-bottom-padding"}>
                    <Col span={12} className={"col-right-padding"}>
                        <span className={"project-label"}>Выбранные пользователи: </span>
                    </Col>
                    <Col span={12} className={"col-left-padding"}>
                        <Input value={searchValue} onChange={(e) => onSearch(e.target.value)} placeholder={"Поиск"} prefix={<SearchOutlined/>}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className={"col-right-padding"}>
                        <List bordered className={"search-array"}>
                            {selectedUsers.length > 0 ? selectedUsers.map((item, index) => {
                                return <List.Item key={item.id}>
                                    <div className={"list-items-justify"}>
                                        <span>{item.name}</span>
                                        <Button danger icon={<CloseOutlined/>} size={"small"} shape={"circle"}/>
                                    </div>
                                </List.Item>
                            }) : <Empty/>}
                        </List>
                    </Col>
                    <Col span={12} className={"col-left-padding"}>
                        <List bordered className={"search-array"}>
                            {searchArray.map((item, index) => {
                                return <List.Item key={item.id}>
                                    <div className={"list-items-justify"}>
                                        <span>{item.name}</span>
                                        <Checkbox/>
                                    </div>
                                </List.Item>
                            })}
                        </List>
                    </Col>
                </Row>
            </Col>
        </>
    );
}