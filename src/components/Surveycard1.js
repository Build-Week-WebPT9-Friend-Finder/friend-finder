import React from "react";
import {Card, Button, CardText, CardBody, CardTitle} from 'reactstrap';
import UseButton from "./Button";
import { Link } from 'react-router-dom';


export default function WelcomeToSurvey() {
    return (
        <Card>
            <CardBody className="Card--Body">
                <CardTitle><h1>Friend Finder Survey</h1></CardTitle>
                <CardText>Welcome to the exclusive new Friend Finder.
               We only accept the best of the best, so losers need not apply!</CardText>
               <UseButton />
            </CardBody>
        </Card>
    );
}