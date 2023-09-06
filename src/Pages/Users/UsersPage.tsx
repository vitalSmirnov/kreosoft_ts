import React, {useEffect, useState} from "react";
import {SelectComponent} from "../../Components/SelectComponent";
import {Layout, Row, Col} from "antd";
import "./UsersPage.css"
import {WatchUserComponent} from "../../Components/WatchUserComponent";
import {AddUserComponent} from "../../Components/AddUserComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteUser, fetchUser, fetchUsers} from "../../store/actionCreators/userActionCreator";

const UsersPage : React.FC = () => {

    enum ActionType{
        Default,
        AddUser,
        SelectUser
    }

    const dispatch = useAppDispatch();
    const {users, user} = useAppSelector(state => state.userReducer);
    const [stateAction, setStateAction] = useState(ActionType.Default);

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [ ])


    const selectUserCallBack = (id : string) => {
        dispatch(fetchUser(id))
        setStateAction(ActionType.SelectUser);
    };

    const addUserCallback = () => {
        setStateAction(stateAction === ActionType.AddUser? ActionType.Default : ActionType.AddUser);
    };

    return (
        <Layout className={"width-100"}>
            <Row className={"container-wrapper"}>
                <span className={"users-header"}>Пользователи</span>
            </Row>
            <Row>
                <Col span={8} className={"container-wrapper"}>
                    <SelectComponent selectCallback={selectUserCallBack} createCallback={addUserCallback} objects={users}/>
                </Col>
                <Col span={16} className={"container-wrapper"}>
                    {stateAction === ActionType.SelectUser? <WatchUserComponent key={user.id} deleteAction={(id: string) => dispatch(deleteUser(id))} user={user}/> :
                        stateAction === ActionType.AddUser? <AddUserComponent/>: <></>}
                </Col>
            </Row>
        </Layout>
    );
}

export default UsersPage;