import React, { useState } from "react";
// import img1 from "../../../public "/assets/Images/Home/service2.png";
// import img2 from "../../../public "/assets/Images/Home/service3.jpg";
// import img3 from "../../../public "/assets/Images/Home/service4.jpg";
// import img4 from "../../../public "/assets/Images/Home/service5.jpg";
import { Link } from "react-router-dom";

function BrainTakeForWho() {
  const [index, setindex] = useState(0);
  const titleArr = [
    "Psycortex for Children",
    "Psycortex for Adolescents",
    "Psycortex for Adults",
    "Psycortex for Elders",
  ];
  const p1Arr = [
    'Neuropsychiatric disorders in children encompass a broad spectrum, spanning from developmental conditions like ADHD, Autistic Spectrum Disorder, and Epilepsy to acquired ones such as Anxiety, Depression, and post Head Injury conditions. Our integrative "Beyond Medication" approach ensures comprehensive care for the affected child and family, facilitating restoration, rehabilitation, and rejuvenation, marking a new chapter.',
    "Neuropsychiatric disorders in adolescents may unveil previously unrecognized conditions like Attention Deficit Disorder or Socialization Disorder. They might also manifest as temperamental changes linked to life transitions from childhood to adulthood, or reactions to environmental stressors such as academic pressure or bullying. Anxiety, mood swings, and turbulent relationships often result from these challenges.",
    "Neuropsychiatric disorders in adults can stem from both biological factors and various psychosocial influences. Adults grappling with neurological conditions such as epilepsy, head injuries, brain tumors, and movement disorders often experience challenges related to memory, mood, and anxiety. Concurrently, mental health issues like anxiety disorders, bipolar disorder, depression, obsessive-compulsive disorder, and schizophrenia present distinct mental health needs in adulthood.",
    "Neuropsychiatric disorders among the elderly frequently stem from degenerative brain conditions such as Alzheimer's dementia, Parkinson's disease, and various movement disorders. Additionally, progressive cerebrovascular disease often results in minor strokes that disrupt brain pathways. Mental health issues can also manifest in seniors due to declining health, disability, bereavement, and social isolation.",
  ];
  const p2Arr = [
    "Family caregivers of children facing these challenges require support and guidance, along with a structured plan, all of which are integral components of our care process. Additionally, Psycortex collaborates with the child's educational institution, whether it be a school, special school, junior college, or vocational center, to promote the holistic development of the affected child.",
    "At Psycortex, our comprehensive care approach extends beyond medication to cater to adolescents' distinct bio-psycho-social requirements, equipping them for the journey ahead. Additionally, our innovative utilization of multiple intelligences and positive psychology empowers young individuals by offering clarity regarding higher education and future career paths.",
    "In the nexus between these realms lie patients encountering unexplained medical symptoms, fibromyalgia, chronic pain, and similar conditions, seeking solutions that remain elusive. Our holistic care approach transcends mere medication, aiming to restore everyday activities and enhance overall life quality for individuals facing these complex challenges.",
    "Memory loss, mood disorders, anxiety, and progressive neurological decline commonly accompany the aging brain. Our interdisciplinary approach transcends conventional medicine, blending modern scientific advancements with ancient wisdom. This allows us to craft personalized plans tailored to each patient's unique needs, ensuring comprehensive care and holistic support.",
  ];
  const imgArr = [
    `${process.env.PUBLIC_URL}/assets/Images/Home/service2.png`,
    `${process.env.PUBLIC_URL}/assets/Images/Home/service3.jpg`,
    `${process.env.PUBLIC_URL}/assets/Images/Home/service4.jpg`,
    `${process.env.PUBLIC_URL}/assets/Images/Home/service5.jpg`,
  ];
  const extLinkArr = ["#", "#", "#", "#"];

  return (
    <div id="BrainTakeForWho">
      <div className="btfw-navbae">
        <span
          onClick={() => {
            setindex(0);
          }}
          style={index === 0 ? { borderTopColor: "#501a77" } : {}}
        >
          {window.innerWidth > 500 ? "Psycortex for " : ""}
          Children
        </span>
        <span
          onClick={() => {
            setindex(1);
          }}
          style={index === 1 ? { borderTopColor: "#501a77" } : {}}
        >
          {window.innerWidth > 500 ? "Psycortex for " : ""} Adolescents
        </span>
        <span
          onClick={() => {
            setindex(2);
          }}
          style={index === 2 ? { borderTopColor: "#501a77" } : {}}
        >
          {window.innerWidth > 500 ? "Psycortex for " : ""} Adults
        </span>
        <span
          onClick={() => {
            setindex(3);
          }}
          style={index === 3 ? { borderTopColor: "#501a77" } : {}}
        >
          {window.innerWidth > 500 ? "Psycortex for " : ""} Elders
        </span>
      </div>
      <div className="btfw-infotab">
        <div>
          <h1>{titleArr[index]}</h1>
          <p>{p1Arr[index]}</p>
          <p>{p2Arr[index]}</p>
          <Link to={extLinkArr[index]} class="know-more-btn">
            Know More
            <div class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <img src={imgArr[index]} alt="" />
      </div>
    </div>
  );
}

export default BrainTakeForWho;
