import React from "react";
import "./Home.css";
import HomeServices from "./Services";
import LandingPage from "./LandingPage";
import TheBrainTake from "./TheBrainTake";
import Stats from "./Stats";

function Home() {
  return (
    <>
      <LandingPage />
      <TheBrainTake />
      <HomeServices />
      <Stats />
    </>
  );
}

export default Home;
