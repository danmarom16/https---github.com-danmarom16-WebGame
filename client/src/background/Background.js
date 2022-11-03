import React, { useEffect, useRef, useState } from "react";
import Sea from "./Sea";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css";
import IslandOne from "./IslandOne";
import IslandTwo from "./IslandTwo";
import IslandThree from "./IslandThree";
import IslandFour from "./IslandFour";
import IslandFive from "./IslandFive";
import IslandSix from "./IslandSix";

function Background({seaImg, islandOneImg, islandTwoImg, 
  islandThreeImg, islandFourImg, islandFiveImg, islandSixImg}) {

  return (
    <div>
      <div>
        <Sea image={seaImg}/>
      </div>
      <Container >
        <Row xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <Col>
            <IslandOne image={islandOneImg}/>
          </Col>
          <Col>
            <IslandTwo image={islandTwoImg}/>
          </Col>
          <Col>
            <IslandThree image={islandThreeImg}/>
          </Col>
        </Row>
        <Row xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <Col>
            <IslandFive image={islandFiveImg} />
          </Col>
          <Col>
            <IslandFour image={islandFourImg} />
          </Col>
          <Col>
            <IslandSix image={islandSixImg}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Background;
