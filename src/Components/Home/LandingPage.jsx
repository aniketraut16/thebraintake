import React, { useState, useEffect } from "react";
// import bg1 from "../../../public "/assets/Images/Home/service1.webp";
// import bg2 from "../../../public "/assets/Images/Home/service2.png ";
// import bg3 from "../../../public "/assets/Images/Home/service3.jpg ";

function LandingPage() {
  const titleArr = ["Mental Health", "Physical Health", "Other Health"];
  const infoArry = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo ullam libero, voluptate ratione beatae necessitatibus odio ducimus saepe doloremque ex assumenda, reprehenderit, aspernatur esse laudantium voluptatum! Tenetur, debitis nesciunt? Dolorem beatae impedit, debitis error totam eos natus iusto consequuntur sit nam officiis cum qui quidem labore magnam eaque atque esse asperiores eum odio reprehenderit inventore architecto. Quo, beatae nisi.",
    "Praesentium voluptas eaque tempora velit consectetur, enim illo saepe provident error. Inventore sit non dolorem nostrum quis eum, eius aperiam ipsum dignissimos architecto perferendis ratione magni! Vitae natus voluptatum labore. In, iste eaque? Vero amet eveniet laboriosam esse. Quod, incidunt ut ducimus, impedit consequatur recusandae officia aliquid perferendis ipsa iste fugit, dolorem saepe commodi quam quasi dolores placeat. Molestias, temporibus.",
    "Unde tenetur nam, in eaque ducimus adipisci inventore distinctio incidunt ipsum dicta velit, ratione autem nostrum neque blanditiis praesentium, fuga magni. Ipsum ad ducimus autem nihil fugiat repudiandae? Sequi, porro! Expedita dolorem unde suscipit, aliquid saepe illum repellat ratione id pariatur, iusto porro assumenda, totam cum! Inventore recusandae earum incidunt veniam quo, sequi ipsum repudiandae ab iste vel ad illo.",
  ];
  const bgArr = [
    `${process.env.PUBLIC_URL}/assets/Images/Home/service1.webp`,
    `${process.env.PUBLIC_URL}/assets/Images/Home/service2.png`,
    `${process.env.PUBLIC_URL}/assets/Images/Home/service3.jpg`,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titleArr.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="LandingPage"
      style={{ background: `url(${bgArr[index]}) center/cover` }}
    >
      <div>
        <h1>Psychology Therapy</h1>
        <h2>{titleArr[index]}</h2>
        <p>{infoArry[index]}</p>
      </div>
    </div>
  );
}

export default LandingPage;
