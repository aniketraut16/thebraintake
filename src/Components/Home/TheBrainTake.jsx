import React from "react";
// import thebraintake from "../../../public/assets/Images/Home/THE BRAIN TAKE.png";

function TheBrainTake() {
  return (
    <div id="wecare">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Images/Home/THE BRAIN TAKE.png`}
        alt=""
      />
      <p>
        Get the gear that never gives up Gain a new perspective on stressful
        situations and build skills to manage your stress.
      </p>
    </div>
  );
}

export default TheBrainTake;
