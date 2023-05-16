import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who We Are</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          officiis, sequi laboriosam sapiente accusamus nisi pariatur provident
          asperiores nesciunt praesentium animi quam dignissimos distinctio
          necessitatibus ab, veritatis modi quasi ex.
        </p>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              magnam, dolorum iusto doloribus maxime est eligendi sunt ea nisi
              molestiae ipsum fuga quis tenetur ut. Laboriosam dicta maiores
              deleniti ullam.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              magnam, dolorum iusto doloribus maxime est eligendi sunt ea nisi
              molestiae ipsum fuga quis tenetur ut. Laboriosam dicta maiores
              deleniti ullam.
            </p>
          </Col>
        </Row>

        <Row>
          <h1>Our Chef</h1>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            libero consequatur nesciunt aliquid quo non dolore autem qui
            debitis, exercitationem modi, unde animi at sed, repellat distinctio
            mollitia illum amet!
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            libero consequatur nesciunt aliquid quo non dolore autem qui
            debitis, exercitationem modi, unde animi at sed, repellat distinctio
            mollitia illum amet!
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            libero consequatur nesciunt aliquid quo non dolore autem qui
            debitis, exercitationem modi, unde animi at sed, repellat distinctio
            mollitia illum amet!
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
