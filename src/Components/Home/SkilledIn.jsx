import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import skilledimg1 from "./Images/skilledIn2.jpg";

function SkilledIn() {
  const skilledInRef = useRef(null);
  const [isimgonscreen, setisimgonscreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skilledIn = skilledInRef.current;
      const rect = skilledIn.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < 0 && rect.top > -1 * (rect.height - windowHeight)) {
        setisimgonscreen(true);
      } else {
        setisimgonscreen(false);
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
        src={skilledimg1}
        alt=""
        id="skilledimg"
        style={
          isimgonscreen ? { position: "fixed", top: "15vh", right: "15vw" } : {}
        }
      />
    </div>
  );
}

export default SkilledIn;
