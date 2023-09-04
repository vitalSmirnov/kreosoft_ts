import {Menu, Space} from "antd";
import {NavLink} from "react-router-dom";


export const Navbar = () => {


    return(
        <Menu mode={"horizontal"} theme={"dark"} className={"menu"}>
            <Menu.Item key={"main"}>
                <Space>

                </Space>
            </Menu.Item>
            <Menu.Item key={"projects"}>
                <NavLink to={"/projects/"}>Проекты</NavLink>
            </Menu.Item>
            <Menu.Item key={"users"}>
                <NavLink to={"/users/"}>Пользователи</NavLink>
            </Menu.Item>
            <Menu.Item key={"logout"}>
                <NavLink to={"/login/"}>Выйти</NavLink>
            </Menu.Item>
        </Menu>
    )
}