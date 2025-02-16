import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./PromoBanner.css";
import popcornimg from "../../assets/Images/home/popcorn.png";

const PromoBanner = () => {
  const navigate = useNavigate(); // React Router hook

  const handleLearnMore = () => {
    navigate("/signin"); // Redirects to the SignIn page
  };

  return (
    <div className="bannerContainer">
      <div className="promo-banner">
        <svg className="red-line" viewBox="0 0 1440 320">
          <path fill="#ff0000" d="M0,256L1440,160L1440,0L0,0Z"></path>
        </svg>

        <img src={popcornimg} alt="Popcorn Icon" className="popcorn-icon" />

        <div className="promo-text">
          <strong>The Netflix you love for just $7.99.</strong>
          <p>Get our most affordable, ad-supported plan.</p>
        </div>

        {/* "Learn More" button redirects to SignIn */}
        <button className="learn-more-btn" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;





















// import React from "react";
// import "./PromoBanner.css";
// import popcornimg from "../../assets/Images/home/popcorn.png"; // Ensure this is in your src/assets folder
// // import redLine from "./line.png"; // Ensure this is in your src/assets folder

// const PromoBanner = () => {
//   return (
//     <div className="promo-banner">
//       {/* Red Curved Line */}
//       {/* <img src={redLine} alt="Red Line" className="red-line" /> */}
// <svg className="red-line" viewBox="0 0 1440 320">
//         <path fill="#ff0000" d="M0,256L1440,160L1440,0L0,0Z"></path>
// </svg>

//       {/* Popcorn Icon */}
//       <img src={popcornimg} alt="Popcorn Icon" className="popcorn-icon" />

//       {/* Text Content */}
//       <div className="promo-text">
//         <strong>The Netflix you love for just $7.99.</strong>
//         <p>Get our most affordable, ad-supported plan.</p>
//       </div>

//       {/* Learn More Button */}
//       <button className="learn-more-btn">Learn More</button>
//     </div>
//   );
// };

// export default PromoBanner;