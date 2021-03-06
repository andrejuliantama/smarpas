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

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import axios from "axios";

class MerchantDashboard extends Component {
  
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  state = { showCreate: false, showConfirm: false };

  showModalCreate = () => {
    this.setState({ showCreate: true, showConfirm: false });
  };
  showModalConfirm = () => {
    this.setState({ showConfirm: true, showCraete: false });
  };
  hideModal = () => {
    this.setState({ showCreate: false, showConfirm: false });
  };

  state = {
    user: [],
    transaction: [],
    exports: []
  }
  componentDidMount() {}

    handleChange = event => {
      this.setState({ transaction: event.target.value });
    }

    handleSubmit = event =>  {
      axios.post('https://smarpas.xyz/createTransaction.php', {
        merchantid: 1,
        amount: parseInt(document.getElementById('nominal').value),
      })
      .then(function (response) {
      
        document.getElementById("qr").src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+response.data.content;
        document.getElementById("invoice").innerHTML = response.data.content;
      })
      .catch(function (error) {
        alert("Error: Amount diantara 1000 - 1.000.000");
        console.log(error);
      });
      event.preventDefault();

      const user = {
        transaction: this.state.transaction
      };
    
    };

    componentDidMount() {
      axios.get('https://smarpas.xyz/listTransaction.php', {
        params: {
          merchantid: 1
        }
      })
        .then(res => {
          console.log(res);
          var arrayObj = res.data.data;
          
          for (var i = 0; i < arrayObj.length; i++) {
            arrayObj[i][0] = arrayObj[i].ID;
            delete arrayObj[i].ID;
            arrayObj[i][1] = arrayObj[i].dompetID;
            delete arrayObj[i].dompetID;
          };

          const transaction = arrayObj;
          this.setState({ transaction });
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Request Done")
        });
      }

    
  
  render() {
    const transaction = this.state.transaction
    const th = ["ID", "Customer", "Amount", "MerchantID", "Type", "Status", "Invoice ID"];
    
    
    // const td = this.state.transaction
    // const trx = Object.values(this.state.transaction)

    // const trxx = trx.map((item, key) =>
    //   <li key={item.id}>{item.name}</li>
    // );

    const td = [
      ["1", "18217006", "1000", "1", "QRIS (1)", "Success", "350246094"],
      ["1", "18217006", "5000", "1", "SMARPAS (1)", "Success", "350246094"]
    ];

    // const e = trx[0]
    
    // console.log(trx)
    // console.log(td)
  
    // const abc = Object.values(this.state.transaction)
    // console.log(Object.values.abc)
    // console.log(Object.values.e)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-info" />}
                statsText="Active Balance"
                statsValue="Rp1.000.000"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> 
            <Col md={12}>
              <p className="copyright pull-left">
              
                <Button size="lg" className="btn btn-info btn-fill" type="submit" onClick={this.showModalCreate}>
                      Create Transaction
                </Button>
                <Modal show={this.state.showCreate}>
                  <Modal.Header>
                    <Modal.Title>Create Transaction</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormInputs
                      ncols = {["col-md-5" , "col-md-3"]}
                      properties = {[
                          {
                              label : "Nominal",
                              id : "nominal",
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
                    <Button className="btn btn-info btn-fill" type="submit" onClick={this.handleSubmit}>
                      Create
                    </Button>
                    <img id='qr'></img>
                    <p className="pull-left" id="invoice"></p>
                    
                  </Modal.Footer>
                </Modal>
                <Button className="btn btn-success btn-fill" type="submit" onClick={this.showModalConfirm}>
                      Confirm Transaction
                </Button>
                <Modal show={this.state.showConfirm}>
                  <Modal.Header>
                    <Modal.Title>Confirm Transaction</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormInputs
                      ncols = {["col-md-5" , "col-md-3"]}
                      properties = {[
                          {
                              label : "Invoice ID",
                              type : "number",
                              bsClass : "form-control",
                              placeholder : "Invoice ID"
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
                    <Button className="btn btn-info btn-fill" type="submit" onClick={event =>  window.location.href=''}>
                      Confirm
                    </Button>
                  </Modal.Footer>
                </Modal>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Transaction"
                category="Institut Teknologi Bandung"
                ctTableFullWidth
                ctTableResponsive
                
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {th.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {td.map((prop, key) => {
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

export default MerchantDashboard;
