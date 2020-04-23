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
import { th, td } from "variables/UserVariables.jsx";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";


class UserDashboard extends Component {
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
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-info" />}
                statsText="Active Balance"
                statsValue="Rp100.000"
                statsIcon={"Pay a Transaction"}
                statsIconText=
                <Button size="lg" className="btn btn-info btn-fill pull-right" type="submit" onClick={event =>  window.location.href=''}>
                  Pay
                </Button>
              />
            </Col>
            <Col lg={3} sm={6}>
              
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Transaction History"
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

export default UserDashboard;