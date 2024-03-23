import React from "react";
import jsonData from "./Blogs.json";
import { useParams } from "react-router-dom";

function Blog() {
  const { section } = useParams();
  const blog = jsonData.find((item) => item.searchkey === section);

  if (!blog) {
    return "NO BLOG FOUND";
  }
  return (
    <div className="One-Blog">
      <h1>{blog.title}</h1>
      <div>
        <p className="lineP">{blog.by}</p>
        <p className="lineP">{blog.Date}</p>
        <p>{blog.tag}</p>
      </div>
      <img src={blog.img} alt="" />
      {blog.content.map((item, index) => {
        if (item.tag === "img") {
          return <img key={index} src={item.src} alt="" />;
        } else if (item.tag === "h2") {
          return <h2 key={index}>{item.text}</h2>;
        } else if (item.tag === "p") {
          return <p key={index}>{item.text}</p>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Blog;
