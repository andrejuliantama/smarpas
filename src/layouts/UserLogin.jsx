import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import component from "react-toggle";
import classnames from "classnames";

class UserLogin extends Component{
    render(){
        return (
            <div className="content">
                <container fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card
                                title="Login"
                            />
                        </Col>
                    </Row>
                </container>
            </div>
        )
    }
}

export default UserLogin;