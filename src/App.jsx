// import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";


// import Home from "./pages/Home/Home";


// function App() {
//   return (
//     // <div className="App">
//       <Home />
//     // </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn"; // Ensure this file exists

function App() {
  return (
    <Router basename="/Netflix">
      {" "}
      {/* Add the basename */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
