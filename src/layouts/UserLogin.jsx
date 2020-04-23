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
import Button from "components/CustomButton/CustomButton.jsx";

class UserLogin extends Component{
    render(){
        return (
            <div className="content">
                <container fluid>
                    <Row className="justify-content-md-center">
                        <Col lg md={6}>
                            <Card 
                                border="primary"
                                title="User Sign In"
                                hCenter="text-center"
                                content={
                                    <form >
                                        
                                        <div className="form-group">
                                            <label> Username</label>
                                            <input type="email" className="form-control" placeholder="Enter Username" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>

                                        <Button bsStyle="info" fill type="submit" href="/user/dashboard">
                                            Login
                                        </Button>
                                        <p className="forgot-password text-right">
                                            Forgot <a href="#">password?</a>
                                        </p>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </container>
            </div>
        )
    }
}

export default UserLogin;