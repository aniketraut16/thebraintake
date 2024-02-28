import React, { useState, useRef, useEffect } from "react";

import serviceimg1 from "./Images/service1.webp";
import serviceimg2 from "./Images/service2.png";
import serviceimg3 from "./Images/service3.jpg";
import serviceimg4 from "./Images/service4.jpg";
import serviceimg5 from "./Images/service5.jpg";
import serviceimg6 from "./Images/service6.jpg";

function HomeServices() {
  const [sections, setSections] = useState([
    {
      title: "Cognitive Behavior Therapy",
      bg: serviceimg1,
      info: "Cognitive Behavioral Therapy (CBT) offers valuable support for individuals experiencing a range of emotional and psychological challenges. It assists individuals in managing their moods, alleviating anxiety, addressing depression, coping with issues related to alcohol and drug use, navigating marital difficulties, managing eating disorders, and coping with severe mental illnesses.",
      active: true,
    },
    {
      title: "Stress Management",
      bg: serviceimg2,
      info: "This therapeutic intervention aims to assist individuals in effectively managing their occupational stressors and fulfilling their professional duties, ultimately contributing to their overall sense of happiness and well-being. By employing various techniques and strategies within this therapy, individuals are empowered to navigate the challenges presented by their work environment with greater ease and resilience. ",
      active: false,
    },
    {
      title: "Alcohol & Drug De-addiction",
      bg: serviceimg3,
      info: "The primary goal of drug treatment is to provide support and assistance to individuals struggling with addiction, helping them break free from the cycle of compulsive drug seeking and usage. Through comprehensive treatment approaches, individuals are equipped with the tools and resources necessary to overcome their dependence on substances. By addressing the underlying factors contributing to addiction and implementing personalized treatment plans .",
      active: false,
    },
    {
      title: "Memory Management",
      bg: serviceimg4,
      info: "Engaging in regular physical activity has numerous benefits for your overall health, one of which is the enhancement of blood circulation throughout your entire body, including the brain. This increased blood flow plays a crucial role in supporting cognitive function and may contribute to maintaining optimal memory function. By promoting greater blood flow to the brain, physical activity serves as a valuable means of preserving cognitive sharpness .",
      active: false,
    },
    {
      title: "Career Counselling",
      bg: serviceimg5,
      info: "Career counseling is a specialized service to assist individuals in navigating career exploration. Counselors use assessments, discussions, and guidance to identify strengths, interests, and aptitudes. This process provides insight into potential career pathways aligning with skills, values, and aspirations, aiding informed decision-making. Career counseling offers invaluable support, equipping individuals with tools to pursue fulfilling careers .",
      active: false,
    },
    {
      title: "Anger Management",
      bg: serviceimg6,
      info: "Anger management counseling is a comprehensive therapeutic approach meticulously crafted to guide individuals through an introspective journey aimed at understanding and effectively managing the complexities of their anger and its pervasive ramifications. Through this process, participants are empowered to delve deep into their emotional landscape, unraveling the interplay of triggers, underlying emotions, and behavioral responses associated with anger.",
      active: false,
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  const infoTabRef = useRef(null);
  const introNavRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, options);

    if (infoTabRef.current && introNavRef.current) {
      observer.observe(infoTabRef.current);
      observer.observe(introNavRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const infoTabElement = infoTabRef.current;
      const introNavElement = introNavRef.current;

      infoTabElement.style.transform = "translateX(0)";
      introNavElement.style.transform = "translateX(0)";
    } else {
      const infoTabElement = infoTabRef.current;
      const introNavElement = introNavRef.current;

      infoTabElement.style.transform = "translateX(-5em)";
      introNavElement.style.transform = "translateX(5em)";
    }
  }, [isVisible]);

  const handleSectionHover = (index) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      active: i === index,
    }));
    setSections(updatedSections);
  };

  return (
    <div
      id="HomeServices"
      style={{
        backgroundImage: `url(${
          sections.find((section) => section.active)?.bg
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="info-tab" ref={infoTabRef}>
        <h1>
          <i className="fa-solid fa-industry"></i>
          {"  "}OUR INTRODUCTION
        </h1>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {section.active && (
              <>
                <h2>{section.title}</h2>
                <p>{section.info}</p>
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <ul className="intro-nav" ref={introNavRef}>
        {sections.map((section, index) => (
          <li
            key={index}
            style={
              section.active
                ? {
                    fontSize: "25px",
                    borderBottom: "2px solid  #a536f3",
                  }
                : {}
            }
            onMouseEnter={() => handleSectionHover(index)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeServices;
