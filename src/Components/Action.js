import { Card, Container, Col, Row, Image } from "react-bootstrap";
import bbImage from "../Assets/images/action/bb.jpg";
import jiuImage from "../Assets/images/action/jiu.jpg";
import miImage from "../Assets/images/action/mi.jpg";
import terminatorImage from "../Assets/images/action/terminator.jpg";
import trImage from "../Assets/images/action/tr.jpg";
import warImage from "../Assets/images/action/war.jpg";

const Action = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">ACTION MOVIE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="Action">
            {" "}
            <Card className="bg-dark movieImage">
              <Image src={bbImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">BAD BOYS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            {" "}
            <Card className="bg-dark movieImage">
              <Image src={jiuImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JIUS JITSU</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            {" "}
            <Card className="bg-dark movieImage">
              <Image src={miImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">
                  MISSION: IMPOSIBLE
                </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            {" "}
            <Card className="bg-dark movieImage">
              <Image
                src={terminatorImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">TERMINATOR</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            {" "}
            <Card className="bg-dark movieImage">
              <Image src={trImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">THE RAID</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            {" "}
            <Card className="bg-dark movieImage">
              <Image src={warImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">WAR</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Action;
