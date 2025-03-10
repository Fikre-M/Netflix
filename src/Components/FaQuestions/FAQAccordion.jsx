import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css";
import faqdata from "../../Data/faqdata";



const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container fluid className="faq bg-black text-white py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <ul className="accordion">
            {faqdata.map((faq, index) => (
              <li key={index}>
                <label onClick={() => toggleAccordion(index)}>
                  {faq.question}
                  <span
                    className={`icon ${activeIndex === index ? "open" : ""}`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </label>
                <div
                  className={`content ${activeIndex === index ? "show" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
          <small>
            Ready to watch? Enter your email to create or restart your
            membership.
          </small>
          <form className="emailsignup">
            <input type="text" placeholder="Email address" required />
            <button type="submit">Get Started</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQAccordion;