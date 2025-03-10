import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./MoreReasonsToJoin.css";
import moredata from "../../Data/moredata"; 

const MoreReasonsToJoin = () => {
  return (
    <div className="more-reasons" style={{ backgroundColor: "black" }}>
      <h2 className="reasons-title">More Reasons to Join</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {moredata.map((reason, idx) => {
          const IconComponent = reason.icon; 
          return (
            <Col key={idx}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{reason.title}</Card.Title>
                  <Card.Text>{reason.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="link" className="float-end">
                    <IconComponent /> 
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MoreReasonsToJoin;








































// import React from "react";
// import { Row, Col, Card, Button } from "react-bootstrap";
// import { FaTv, FaArrowDown, FaSmile, FaUser } from "react-icons/fa";
// import "./MoreReasonsToJoin.css";
// // import moredata from "../../../public/moredata";
// import moredata from "../../Data/moredata"; 


// const MoreReasonsToJoin = () => {
//   return (
//     <div className="more-reasons" style={{ backgroundColor: "black" }}>
//       <h2 className="reasons-title">More Reasons to Join</h2>
//       <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//         {moredata.map((reason, idx) => (
//           <Col key={idx}>
//             <Card className="h-100">
//               <Card.Body>
//                 <Card.Title>{reason.title}</Card.Title>
//                 <Card.Text>{reason.description}</Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <Button variant="link" className="float-end">
//                   {reason.icon}
//                 </Button>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };
// export default MoreReasonsToJoin;