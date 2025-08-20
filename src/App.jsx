import React from "react"
import "./App.css";
// import "./backend/css/Navbar.css"
import "./css/PlansAndPayments.css";
// import "./css/MyQRCodes.css"
import "./css/BottomToTop.css";
import "./css/Home_Page.css";
// import New_QR from "./backend/Dashboards/New_QR.jsx";
// import Navbar from "./backend/Dashboards/Navbar.jsx";
// import MyQRCodes from "./backend/Dashboards/MyQRCodes.jsx";
// import Stats from "./backend/Dashboards/Stats.jsx";
// import PlansAndPayments from "./backend/Dashboards/PlansAndPayments.jsx";
// import Setting from "./backend/Dashboards/Setting.jsx";
// import User from "./backend/Dashboards/User.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import Home_Page from "./Components/Home_Page.jsx";
// import Login from "./Components/Login.jsx";
// import Registration from "./Components/Registration.jsx";
import Navbar_1 from "./Components/Navbar_1.jsx";
import BottomToTop from "./Components/BottomToTop.jsx";

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
function App() {
  // const location = useLocation();

  // Dashboard routes
  // const dashboardPaths = [
  //   "/dashboard",
  //   "/my_QR",
  //   "/stats",
  //   "/payment",
  //   "/setting",
  //   "/user",
  // ];

  // const isDashboard = dashboardPaths.includes(location.pathname);
  return (
    <>
      {/* Conditional navbar rendering */}
      {/* {isDashboard ? <Navbar /> : <Navbar_1 />} */}
      <Router>
        <BottomToTop />
        <Navbar_1 />
        <Routes>
          <Route path="/" element={<Home_Page />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signUp" element={<Registration />} /> */}
          {/* <Route path="/dashboard" element={<New_QR />} /> */}
          {/* <Route path="/my_QR" element={<MyQRCodes />} /> */}
          {/* <Route path="/stats" element={<Stats />} /> */}
          {/* <Route path="/payment" element={<PlansAndPayments />} /> */}
          {/* <Route path="/setting" element={<Setting />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
