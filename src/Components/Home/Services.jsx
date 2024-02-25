import React, { useState, useRef, useEffect } from "react";

import serviceimg1 from "./Images/service1.webp";
import serviceimg2 from "./Images/service2.jpg";
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
      info: "This therapeutic intervention aims to assist individuals in effectively managing their occupational stressors and fulfilling their professional duties, ultimately contributing to their overall sense of happiness and well-being. By employing various techniques and strategies within this therapy, individuals are empowered to navigate the challenges presented by their work environment with greater ease and resilience. As a result, they are better equipped to maintain a positive outlook, handle stress more effectively, and derive satisfaction from their professional endeavors, leading to enhanced levels of happiness and fulfillment in both their work and personal lives.",
      active: false,
    },
    {
      title: "Alcohol & Drug De-addiction",
      bg: serviceimg3,
      info: "The primary goal of drug treatment is to provide support and assistance to individuals struggling with addiction, helping them break free from the cycle of compulsive drug seeking and usage. Through comprehensive treatment approaches, individuals are equipped with the tools and resources necessary to overcome their dependence on substances. By addressing the underlying factors contributing to addiction and implementing personalized treatment plans, individuals can achieve sustained recovery and regain control over their lives. Drug treatment endeavors to empower individuals to lead healthy, fulfilling lives free from the grip of addiction.",
      active: false,
    },
    {
      title: "Memory Management",
      bg: serviceimg4,
      info: "Engaging in regular physical activity has numerous benefits for your overall health, one of which is the enhancement of blood circulation throughout your entire body, including the brain. This increased blood flow plays a crucial role in supporting cognitive function and may contribute to maintaining optimal memory function. By promoting greater blood flow to the brain, physical activity serves as a valuable means of preserving cognitive sharpness and potentially reducing the risk of cognitive decline. Incorporating exercise into your routine can thus be an effective strategy for supporting cognitive health and ensuring that your memory remains sharp as you age.",
      active: false,
    },
    {
      title: "Career Counselling",
      bg: serviceimg5,
      info: "Career counseling is a specialized service designed to assist individuals in navigating the complex process of career exploration and decision-making. By leveraging a combination of assessments, discussions, and personalized guidance, career counselors work collaboratively with individuals to identify their unique strengths, interests, and aptitudes. Through this process, individuals gain valuable insight into potential career pathways that align with their skills, values, and aspirations. Career counseling facilitates informed decision-making by providing individuals with the resources and support needed to explore various career options, set meaningful goals, and develop actionable plans for achieving success in their chosen field. Ultimately, career counseling empowers individuals to make informed career choices that are well-suited to their individual preferences and capabilities, fostering long-term satisfaction and fulfillment in their professional lives.",
      active: false,
    },
    {
      title: "Anger Management",
      bg: serviceimg6,
      info: "Anger management counseling is a therapeutic process designed to help individuals explore and address issues related to their anger & its effects.",
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
                    fontSize: "1.7em",
                    borderBottom: "4px solid  #da0e29",
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
