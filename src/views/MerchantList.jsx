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
import { Grid, Row, Col, Table } from "react-bootstrap";
import StatsCard from "components/StatsCard/StatsCard";
import Card from "components/Card/Card.jsx";
import { thMerchant, tdMerchant } from "variables/Variables.jsx";



class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <p className="copyright pull-left">
          <a
            href="#"
            target="_blank"
            className="btn btn-info btn-fill"
          >
            Add Merchant
          </a>
          
          <a
            href="#"
            target="_blank"
            className="btn btn-danger btn-fill btn-info"
          >
            Delete Merchant
          </a>
        </p>
        <p className="copyright pull-right">
          <a
            href="#"
            target="_blank"
            className="btn btn-success btn-fill"
          >
            Export CSV
          </a>
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
