import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "./Info.css";

function Info({ title, subtitle_1, subtitle_2, subtitle_3, subtitle_4 }) {
  return (
    <div data-testid='info_test' className="info">
      <Row>
        <Col className={`info__subtitle ${title && "info__title"}`} span={3}>
          <h3>{subtitle_1}</h3>
        </Col>
        <Col className={`info__subtitle ${title && "info__title"}`} span={3}>
          <h3>{subtitle_2}</h3>
        </Col>
        <Col className={`info__subtitle ${title && "info__title"}`} span={3}>
          <h3>{subtitle_3}</h3>
        </Col>
        <Col className={`info__subtitle ${title && "info__title"}`} span={3}>
          <h3>{subtitle_4}</h3>
        </Col>
      </Row>
    </div>
  );
}

export default Info;
