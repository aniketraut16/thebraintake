import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import skilledimg1 from "../../../public/assets/Images/Home/skilledIn2.jpg";

function SkilledIn() {
  const [index, setindex] = useState(0);
  const skilledInRef = useRef(null);
  const [isimgonscreen, setisimgonscreen] = useState(false);
  const [isOnbottom, setisOnbottom] = useState(false);
  const imgArr = [
    "/assets/Images/Home/skilledIn1.jpg",
    "/assets/Images/Home/skilledIn2.jpg",
    "/assets/Images/Home/skilledIn3.jpg",
    "/assets/Images/Home/skilledIn4.jpg",
    "/assets/Images/Home/skilledIn5.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skilledIn = skilledInRef.current;
      const rect = skilledIn.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const maxBottompoint =
        -1 * (rect.height - windowHeight) - 0.1 * windowHeight;
      if (rect.top <= 0 && rect.top >= maxBottompoint) {
        if (rect.top > (maxBottompoint / 5) * 1) {
          setindex(0);
        } else if (rect.top > (maxBottompoint / 5) * 2) {
          setindex(1);
        } else if (rect.top > (maxBottompoint / 5) * 3) {
          setindex(2);
        } else if (rect.top > (maxBottompoint / 5) * 4) {
          setindex(3);
        } else if (rect.top > (maxBottompoint / 5) * 5) {
          setindex(4);
        }
        setisimgonscreen(true);
      } else {
        setisimgonscreen(false);
      }
      if (rect.top < -1 * (rect.height - windowHeight)) {
        setisOnbottom(true);
      } else {
        setisOnbottom(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="SkilledIn" ref={skilledInRef}>
      <div className="side-text">
        <div id="skill1">
          <h1>
            <h1 id="specilizedIn">We are Specialized in...</h1>
            Adult Psychology
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facere quia unde impedit ipsa ullam. Vel tempore consequuntur
            eveniet fugiat. Quidem expedita asperiores doloremque officia
            praesentium voluptatem distinctio atque sed?
            <Link class="know-more-btn">
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
          </p>
        </div>
        <div id="skill2">
          <h1> Child And Adult Psychology</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facere quia unde impedit ipsa ullam. Vel tempore consequuntur
            eveniet fugiat. Quidem expedita asperiores doloremque officia
            praesentium voluptatem distinctio atque sed?
            <Link class="know-more-btn">
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
          </p>
        </div>
        <div id="skill3">
          <h1> Geriatric Psychology</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facere quia unde impedit ipsa ullam. Vel tempore consequuntur
            eveniet fugiat. Quidem expedita asperiores doloremque officia
            praesentium voluptatem distinctio atque sed?
            <Link class="know-more-btn">
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
          </p>
        </div>
        <div id="skill4">
          <h1> Memory Management</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facere quia unde impedit ipsa ullam. Vel tempore consequuntur
            eveniet fugiat. Quidem expedita asperiores doloremque officia
            praesentium voluptatem distinctio atque sed?
            <Link class="know-more-btn">
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
          </p>
        </div>
        <div id="skill5">
          <h1> Psychosexual Disorders</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facere quia unde impedit ipsa ullam. Vel tempore consequuntur
            eveniet fugiat. Quidem expedita asperiores doloremque officia
            praesentium voluptatem distinctio atque sed?
            <Link class="know-more-btn">
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
          </p>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + imgArr[index]}
        alt=""
        id="skilledimg"
        style={
          isimgonscreen
            ? { position: "fixed", top: "15vh", right: "9vw" }
            : isOnbottom
            ? { alignSelf: "flex-end" }
            : {}
        }
      />
    </div>
  );
}

export default SkilledIn;
