import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

export default function SWCard(props) {
    
    return (
        <Col height="100%">
            <Card height="100%">
                <CardBody height="100%">
                    <CardTitle></CardTitle>
                    <CardImg></CardImg>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Col>
    );
}