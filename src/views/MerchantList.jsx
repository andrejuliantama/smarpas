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
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import StatsCard from "components/StatsCard/StatsCard";
import Card from "components/Card/Card.jsx";
import { thMerchant, tdMerchant } from "variables/Variables.jsx";
import axios from "axios";




class TableList extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  state = {
    exports: []
  }
  handleExport = event => { 
    axios.get('https://smarpas.xyz/exportTransaction.php', {
      params: {
        merchantid: parseInt(document.getElementById('id').value)
      }
    })
      .then(res => {
        console.log(res);
        const exports = res.data;
        this.setState({ exports });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Request Done")
      });
    };
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <p className="copyright pull-left">
          <Button
            href="#"
            target="_blank"
            className="btn btn-info btn-fill"
          >
            Add Merchant
          </Button>
          
          <Button
            href="#"
            target="_blank"
            className="btn btn-danger btn-fill btn-info"
          >
            Delete Merchant
          </Button>
        </p>
        <p className="copyright pull-right">
          <Button
            href="#"
            target="_blank"
            className="btn btn-success btn-fill"
            onClick={this.showModal}
          >
            Export CSV
          </Button>
          <Modal show={this.state.show}>
              <Modal.Header>
                <Modal.Title>Top Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormInputs
                  ncols = {["col-md-5" , "col-md-3"]}
                  properties = {[
                      {
                          label : "ID",
                          id: "id",
                          type : "number",
                          bsClass : "form-control",
                          placeholder : "Merchant ID",
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
                <Button className="btn btn-info btn-fill" type="submit" onClick={event =>  window.location.href="https://smarpas.xyz/exportTransaction.php?merchantid=1"}>
                  Export CSV
                </Button>
              </Modal.Footer>
            </Modal>
        </p>
          <Row>
            <Col md={12}>
              <Card
                title="Merchant List"
                category="Institut Teknologi Bandung"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thMerchant.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdMerchant.map((prop, key) => {
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

export default TableList;
