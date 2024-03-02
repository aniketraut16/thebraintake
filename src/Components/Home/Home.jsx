import React from "react";
import "./Home.css";
import HomeServices from "./Services";
import LandingPage from "./LandingPage";
import TheBrainTake from "./TheBrainTake";
import Stats from "./Stats";
import SkilledIn from "./SkilledIn";
import BrainTakeForWho from "./BrainTakeForWho";
import Testimonial from "./Testimonial";
import Acheivements from "./Acheivements";

function Home() {
  return (
    <>
      <LandingPage />
      <TheBrainTake />
      <HomeServices />
      <Stats />
      <SkilledIn />
      <BrainTakeForWho />
      <Acheivements />
      <Testimonial />
    </>
  );
}

export default Home;
