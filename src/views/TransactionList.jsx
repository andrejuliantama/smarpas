/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, Modal } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thUser, tdUser } from "variables/Variables.jsx";
import StatsCard from "components/StatsCard/StatsCard";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

class UserList extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <p className="copyright pull-left">
            <button
              href="#"
              target="_blank"
              className="btn btn-info btn-fill"
            >
              Add User
            </button>
            
            <a
              href="#"
              target="_blank"
              className="btn btn-danger btn-fill"
            >
              Delete User
            </a>
          </p>
          <p className="copyright pull-right">
            <Button
              href=""
              target="_blank"
              className="btn btn-success btn-fill"
              onClick={this.showModal}
            >
              Top Up
            </Button>
            <Modal show={this.state.show}>
              <Modal.Header>
                <Modal.Title>Top Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormInputs
                  ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                  properties = {[
                      {
                          label : "NIM",
                          type : "number",
                          bsClass : "form-control",
                          placeholder : "Nim",
                      },
                      {
                          label : "Nominal",
                          type : "number",
                          bsClass : "form-control",
                          placeholder : "Nominal"
                      },
                      {
                          label : "PIN",
                          type : "password",
                          bsClass : "form-control",
                          placeholder : "PIN"
                      }
                  ]}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-danger btn-fill" onClick={this.hideModal}>
                  Cancel
                </Button>
                <Button className="btn btn-info btn-fill" type="submit" onClick={event =>  window.location.href='https://google.com'}>
                  Top Up
                </Button>
              </Modal.Footer>
            </Modal>
          </p>
          
          <Row>
            <Col md={12}>
              <Card
                title="User List"
                category="Institut Teknologi Bandung"
                
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thUser.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdUser.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserList;
