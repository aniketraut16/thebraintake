import React from "react";
import "./Home.css";
import HomeServices from "./Services";
import LandingPage from "./LandingPage";
import TheBrainTake from "./TheBrainTake";
import Stats from "./Stats";
import SkilledIn from "./SkilledIn";

function Home() {
  return (
    <>
      <LandingPage />
      <TheBrainTake />
      <HomeServices />
      <Stats />
      <SkilledIn />
    </>
  );
}

export default Home;
