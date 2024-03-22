import React, { useEffect } from "react";
import "./Testimonial.css";
import data from "./Testimonial.json";

function Testimonials() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const oneTestmonial = (ele) => {
    return (
      <div className="onetestimonial">
        <i className="fa-solid fa-quote-right"></i>
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/Testimonials/${ele.img}`}
          alt=""
        />
        <p>{ele.msg}</p>
        <h3>{ele.name}</h3>
        <h4>{ele.role}</h4>
      </div>
    );
  };

  return (
    <div id="Testimonials">
      <div className="header">Testimonials</div>
      <h1>What Our Clients Say</h1>
      <h2>
        <span className="line"></span>
        Clients's Review
        <span className="line"></span>
      </h2>
      <div className="all-testimonialdiv">
        {data.map((ele, index) => oneTestmonial(ele))}
      </div>
    </div>
  );
}

export default Testimonials;
