import React from "react";

function Team() {
  const members = [
    {
      name: "DR. VIJAY DWIVEDI",
      role: "Director | Psycortex Brain Take Mental Health Pvt. Ltd.",
      src: "/assets/Images/AboutUs/DirectorsMessage/dr. dwivedi.jpeg",
    },
    {
      name: "DR. RASHMI SHUKLA",
      role: "Director | Psycortex Brain Take Mental Health Pvt. Ltd.",
      src: "/assets/Images/AboutUs/DirectorsMessage/drshukla.jpeg",
    },
  ];

  const oneMember = (member) => {
    return members.map((member, index) => (
      <div className="onemember">
        <img src={process.env.PUBLIC_URL + member.src} alt="" />{" "}
        <div>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      </div>
    ));
  };
  return (
    <div id="Team">
      <div id="teamdiv">{oneMember()}</div>
    </div>
  );
}

export default Team;
