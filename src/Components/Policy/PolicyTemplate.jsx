import React, { useEffect, useRef } from "react";
import jsonData from "./Policy.json";
import { useParams } from "react-router-dom";

function PolicyTemplate() {
  const { section } = useParams();
  const blog = jsonData.find((item) => item.searchkey === section);

  const observedElements = useRef([]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          } else {
            entry.target.style.transform = "scale(0.95)";
            entry.target.style.opacity = "0";
          }
        });
      },
      { threshold: 0.1 }
    );

    observedElements.current.forEach((el) => {
      if (el) {
        // Ensure element is valid before observing
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!blog) {
    return "NO BLOG FOUND";
  }
  return (
    <div
      className="One-Blog"
      style={{
        padding: "5em 0px",
      }}
    >
      {blog.content.map((item, index) => {
        if (item.tag === "img") {
          return (
            <img
              ref={(el) => el && observedElements.current.push(el)}
              key={index}
              src={item.src}
              alt=""
            />
          );
        } else if (item.tag === "h2") {
          return (
            <h2
              ref={(el) => el && observedElements.current.push(el)}
              key={index}
            >
              {item.text}
            </h2>
          );
        } else if (item.tag === "p") {
          return (
            <p
              ref={(el) => el && observedElements.current.push(el)}
              key={index}
            >
              {item.text}
            </p>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default PolicyTemplate;
