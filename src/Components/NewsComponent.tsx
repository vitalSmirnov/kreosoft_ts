import {Divider, List, Row} from "antd";
import {INews} from "../models/ITexts";


export const NewsComponent = (props : INews) => {

    return(
        <>
            <Row className={"background-light container-right min-height-20 display-column-up"}>
                <span className={"header"}>News</span>
                <Divider/>
                <List>
                    {props.news.length !== 0 ? props.news.map((value, index) => {
                        return <List.Item key={index}>{
                            <>
                                <a href="/#" className={"news-link-item"}>{value.tittle}</a>
                                <a href="/#" className={"news-link-item"}>{value.data}</a>
                            </>}</List.Item>
                    }) : <List.Item>{<div className={"news-links"}>
                        <a href="/#" className={"news-link-item"}>Lorem ipsum dolor sit amet.</a>
                        <a href="/#" className={"news-link-item"}>Новый релиз</a>
                    </div>}</List.Item>}
                </List>
            </Row>
        </>
    )
}