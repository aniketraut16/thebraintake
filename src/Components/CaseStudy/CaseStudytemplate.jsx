import React from "react";
import jsonData from "./CaseStudy.json";
import { useParams } from "react-router-dom";

function CaseStudytemplate() {
  const { section } = useParams();
  const casestudy = jsonData.find((item) => item.searchkey === section);
  if (!casestudy) {
    return "NO BLOG FOUND";
  }
  return (
    <div className="One-Blog">
      <h1 style={{ fontSize: "2.4em" }}>{casestudy.title}</h1>
      <div>
        <p>{casestudy.by}</p>
      </div>
      <img src={casestudy.img} alt="" />
      {casestudy.content.map((item, index) => {
        if (item.tag === "img") {
          return <img key={index} src={item.src} alt="" />;
        } else if (item.tag === "h2") {
          return <h2 key={index}>{item.text}</h2>;
        } else if (item.tag === "p") {
          return (
            <p
              key={index}
              style={{ marginLeft: `${item.level === "2" ? "1em" : "0px"}` }}
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

export default CaseStudytemplate;
