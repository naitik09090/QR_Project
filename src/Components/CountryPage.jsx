import React from "react";
import { useParams } from "react-router-dom";
import Home_Page from "./Home_Page.jsx";

function CountryPage() {
  const { country } = useParams();

  // Pass the country prop to your main home component
  return <Home_Page country={country} />;
}

export default CountryPage;
