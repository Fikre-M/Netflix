import { Row, Col, Card, Button } from "react-bootstrap";
import { FaTv, FaArrowDown, FaSmile, FaUser } from "react-icons/fa";
import "./MoreReasonsToJoin.css";

const MoreReasonsToJoin = () => {
  const reasons = [
    {
      title: "Enjoy on your TV.",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <FaTv />,
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
      icon: <FaArrowDown />,
    },
    {
      title: "Watch everywhere.",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      icon: <FaSmile />,
    },
    {
      title: "Create profiles for kids.",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="more-reasons" style={{ backgroundColor: "black" }}>
      <h2 className="reasons-title">More Reasons to Join</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {reasons.map((reason, idx) => (
          <Col key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{reason.title}</Card.Title>
                <Card.Text>{reason.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="link" className="float-end">
                  {reason.icon}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default MoreReasonsToJoin;
