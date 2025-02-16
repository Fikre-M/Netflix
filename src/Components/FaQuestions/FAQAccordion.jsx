import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $11.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com or on any internet-connected device.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

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
            {faqs.map((faq, index) => (
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






























// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Faq.css"; 

// const FAQAccordion = () => {
//   return (
//     <Container fluid className="faq bg-black text-white py-5">
//       <Row className="justify-content-center">
//         <Col xs={12} md={10} lg={8}>
//           <h2 className="text-center mb-4">Frequently Asked Questions</h2>
//           <ul className="accordion">
//             <li>
//               <input type="radio" name="accordion" id="first" />
//               <label htmlFor="first">What is Netflix?</label>
//               <div className="content">
//                 <p>
//                   Netflix is a streaming service that offers a wide variety of
//                   award-winning TV shows, movies, anime, documentaries, and more
//                   on thousands of internet-connected devices. You can watch as
//                   much as you want, whenever you want, without a single
//                   commercial – all for one low monthly price. There's always
//                   something new to discover, and new TV shows and movies are
//                   added every week!
//                 </p>
//               </div>
//             </li>
//             <li>
//               <input type="radio" name="accordion" id="second" />
//               <label htmlFor="second">How much does Netflix cost?</label>
//               <div className="content">
//                 <p>
//                   Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
//                   streaming device, all for one fixed monthly fee. Plans range
//                   from $7.99 to $11.99 a month. No extra costs, no contracts.
//                 </p>
//               </div>
//             </li>
//             <li>
//               <input type="radio" name="accordion" id="third" />
//               <label htmlFor="third">Where can I watch?</label>
//               <div className="content">
//                 <p>
//                   Watch anywhere, anytime, on an unlimited number of devices.
//                   Sign in with your Netflix account to watch instantly on the
//                   web at netflix.com from your personal computer or on any
//                   internet-connected device that offers the Netflix app,
//                   including smart TVs, smartphones, tablets, streaming media
//                   players, and game consoles.
//                 </p>
//               </div>
//             </li>
//             <li>
//               <input type="radio" name="accordion" id="fourth" />
//               <label htmlFor="fourth">How do I cancel?</label>
//               <div className="content">
//                 <p>
//                   Netflix is flexible. There are no pesky contracts and no
//                   commitments. You can easily cancel your account online in two
//                   clicks. There are no cancellation fees – start or stop your
//                   account anytime.
//                 </p>
//               </div>
//             </li>
//             <li>
//               <input type="radio" name="accordion" id="fifth" />
//               <label htmlFor="fifth">What can I watch on Netflix?</label>
//               <div className="content">
//                 <p>
//                   Netflix has an extensive library of feature films,
//                   documentaries, TV shows, anime, award-winning Netflix
//                   originals, and more. Watch as much as you want, anytime you
//                   want.
//                 </p>
//               </div>
//             </li>
//             <li>
//               <input type="radio" name="accordion" id="sixth" />
//               <label htmlFor="sixth">Is Netflix good for kids?</label>
//               <div className="content">
//                 <p>
//                   The Netflix Kids experience is included in your membership to
//                   give parents control while kids enjoy family-friendly TV shows
//                   and movies in their own space.
//                 </p>
//               </div>
//             </li>
//           </ul>
//           <small>
//             Ready to watch? Enter your email to create or restart your
//             membership.
//           </small>
//           <form className="emailsignup">
//             <input type="text" placeholder="Email address" required />
//             <button type="submit">Get Started</button>
//           </form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FAQAccordion;


