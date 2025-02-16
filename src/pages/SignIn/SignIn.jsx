// import React from "react";
// import styles from "./SignIn.module.css";

// const SignIn = () => {
//   return (
    
//     <div className={styles["signin-container"]}>
//       <h2>Sign In to Netflix</h2>
//       <form className={styles["signin-form"]}>
//         <input type="email" placeholder="Email or phone number" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Sign In</button>
//       </form>
//       <p>
//         New to Netflix? <a href="#">Sign up now</a>
//       </p>
//     </div>
//   );
// };

// export default SignIn;






import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import bgLogo from "../../assets/Images/icons/Netflix_Logo_PMS.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SignIn = () => {
  return (
    <div className={styles["signin-page"]}>
      {/* Navigation Bar */}
      <nav className={styles["nav-bar"]}>
        <Container>
          <Row className="align-items-center justify-content-between">
            {/* Netflix Logo on the left */}
            <Col xs={6} md={4}>
              <Link to="/">
                <Image
                  className={styles["bglogo"]}
                  src={bgLogo}
                  alt="Netflix Logo"
                  fluid
                />
              </Link>
            </Col>

            {/* Language Button on the right */}
            <Col xs={6} md={4} className="text-end">
              <Button
                className={styles["language-button"]}
                variant="outline-light"
              >
                English <ArrowDropDownIcon />
              </Button>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* Content Section */}
      <div className={styles["content-container"]}>
        <Container>
          <Row className="align-items-center">
            {/* Left Section: Join Plan */}
            <Col md={6} className={styles["plan-section"]}>
              <div className={styles["plan-box"]}>
                <h2>Join Standard with ads, our lowest-priced plan</h2>
                <Button className={styles["join-button"]}>
                  Join for $7.99 <KeyboardArrowRightIcon />
                </Button>
              </div>
            </Col>

            {/* Divider */}
            <Col md={1} className={styles["divider"]}></Col>

            {/* Right Section: Pricing Details */}
            <Col md={5} className={styles["pricing-section"]}>
              <div className={styles["pricing-box"]}>
                <h3>
                  Monthly price <span>$7.99</span>
                </h3>
                <h3>
                  Ads <span>Short and seamless</span>
                </h3>
                <h3>
                  Resolution <span>1080p (Full HD)</span>
                </h3>
                <h3>
                  Devices your household can watch at the same time{" "}
                  <span>2</span>
                </h3>
                <h3>
                  Download <span>Included</span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
