import { Col, Container, Row, Button } from "react-bootstrap";

const intro = () => {
  return (
    <div className=" intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON FILM</div>
            <div className="title">DISINI SERU BANGET CUY</div>
            <div className="intro-button mt-4 text-center">
              <Button variant="dark">Lihat semua list</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default intro