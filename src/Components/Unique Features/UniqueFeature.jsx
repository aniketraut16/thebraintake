import React, { useState, useRef, useEffect } from "react";
import jsonData from "./UniqueFeatures.json";
import { useParams } from "react-router-dom";
import "./UniqueFeatures.css";

function UniqueFeature() {
  const { section } = useParams();
  const sectionData = jsonData[section];
  const observedElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
          } else {
            entry.target.style.transform = "scale(0.95)";
          }
        });
      },
      { threshold: 0.1 }
    );

    observedElements.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionData]); // Ensure useEffect runs whenever sectionData changes

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video) {
        video.play();
        setPlaying(true);
      }
    };

    const handleEnded = () => {
      if (video) {
        video.currentTime = 0; // Reset video to start
        playVideo();
      }
    };

    if (!playing) {
      playVideo();
    }

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [playing]);

  return (
    <div id="UniqueFeature">
      <div
        className="breadcrumb"
        ref={(el) => el && observedElements.current.push(el)} // Check if el exists before pushing
      >
        {sectionData?.breadcrumb}
      </div>
      <div className="section1">
        <div>
          <h1 ref={(el) => el && observedElements.current.push(el)}>
            {sectionData?.title}
          </h1>
          <h3 ref={(el) => el && observedElements.current.push(el)}>
            {sectionData?.subtitle1}
          </h3>
          <div>
            <div>
              <p ref={(el) => el && observedElements.current.push(el)}>
                {sectionData?.p11}
              </p>
              <p ref={(el) => el && observedElements.current.push(el)}>
                {sectionData?.p12}
              </p>
            </div>
            <div>
              <p ref={(el) => el && observedElements.current.push(el)}>
                {sectionData?.p13}
              </p>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/Images/Unique Features/${sectionData?.s1img}` /* Ensure sectionData exists */
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div>
          <div>
            <h1>{sectionData.subtitle2}</h1>
            <p>{sectionData.p21}</p>
            <p>{sectionData.p22}</p>
          </div>
          <video ref={videoRef}>
            <source
              src={
                process.env.PUBLIC_URL +
                `/assets/Videos/Unique Features/${sectionData?.s2vid}`
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default UniqueFeature;
