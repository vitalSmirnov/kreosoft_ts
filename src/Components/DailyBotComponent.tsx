import {Divider, List, Row} from "antd";
import {INews} from "../models/ITexts";


export const DailyBotComponent = (props : INews) => {

    return(
        <>
            <Row className={"background-light container-right min-height-65 display-column-up"}>
                <span className={"daily-header"}>DailyBot</span>
                <Divider/>
                    <List>
                        {props.news.length !== 0 ? props.news.map((value, index) => {
                            return <List.Item key={index}>{value.data}</List.Item>
                        }) : <List.Item>{<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi consectetur,
                            consequatur cum cupiditate est, excepturi ipsam iste laborum molestiae nulla odit quas veniam. Ad, alias culpa
                            cupiditate debitis earum fugit hic itaque magni odio rem, sapiente sint tenetur ullam vitae voluptatibus. Assumenda
                            consequuntur culpa iusto modi neque soluta voluptate?</p>}</List.Item>}
                    </List>
            </Row>
        </>
    )
}