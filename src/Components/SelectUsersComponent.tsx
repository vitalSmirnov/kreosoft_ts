import {Button, Checkbox, Col, Empty, Input, List, Row} from "antd";
import {SearchOutlined, CloseOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUsers} from "../store/actionCreators/userActionCreator";
import {IUser} from "../models/IUser";

interface ISelectedProps{
    selectedUsers: IUser[]
}

export const SelectUsersComponent = ({selectedUsers} : ISelectedProps) => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.userReducer);
    const [searchValue, setSearchValue] = useState("");
    const [searchArray, setSearchArray] = useState(users);

    const onSearch = (value:string) => {
        setSearchValue(value);
    }

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [ ])

    useEffect(() => {
        setSearchArray(
            users.filter((item : any) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, users]);

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
                            {selectedUsers.length > 0 ? selectedUsers.map((item) => {
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
                            {searchArray.map((item) => {
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