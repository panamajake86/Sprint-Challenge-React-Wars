import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

export default function SWCard(props) {

    return (
        <Col height="100%">
            <Card height="100%">
                <CardBody height="100%">
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.species} from {props.homeworld}</CardText>
                    <CardText>Appears in {props.films}</CardText>
                    <CardText>Pilots {props.starships} {props.vehicles}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}