import React from "react";
import "./Destinations.css";
import Divider from "@mui/material/Divider";
import { Row, Col } from "react-simple-flex-grid";

function Destinations() {
  return (
    <div data-testid='destinations_test' className="destinations">
      <h2>Inspiration for future getaways</h2>
      <div className="destination__getaways">
        <ul>
          <li>
            <a>Lake Destinations</a>
          </li>
          <li>
            <a>Mountain Destinations</a>
          </li>
          <li>
            <a>Coastal Destinations</a>
          </li>
          <li>
            <a>Island Destinations</a>
          </li>
          <li>
            <a>Outdoor Destinations</a>
          </li>
          <li>
            <a>Other Popular Destinations</a>
          </li>
        </ul>
      </div>
      <Divider orientation="horizontal" />
      <div className="destination__cities">
        <Row style={{ padding: "0 0 25px 0" }}>
          <Col className="destination__city" span={3}>
            <h3>Adirondack</h3>
            <h4>New York</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Algoquin</h3>
            <h4>Ontario</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Austin</h3>
            <h4>Texas</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Bala</h3>
            <h4>Ontario</h4>
          </Col>
        </Row>
        <Row style={{ padding: "0 0 25px 0" }}>
          <Col className="destination__city" span={3}>
            <h3>Balsam Lake</h3>
            <h4>Wisconsin</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Bancroft</h3>
            <h4>Ontaario</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Banff</h3>
            <h4>Alberta</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Bracebridge</h3>
            <h4>Ontario</h4>
          </Col>
        </Row>
        <Row style={{ padding: "0 0 25px 0" }}>
          <Col className="destination__city" span={3}>
            <h3>Buckhorn</h3>
            <h4>Ontario</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Clear Lake</h3>
            <h4>Ontario</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <h3>Cultus Lake</h3>
            <h4>British Columbia</h4>
          </Col>
          <Col className="destination__city" span={3}>
            <p>Show more</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Destinations;
