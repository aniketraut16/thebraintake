import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import BottomtoTopBtn from "./BottomtoTopBtn";

function Navbar() {
  const [section, setsection] = useState("aboutus");
  const [isDropdownActive, setisDropdownActive] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const DropdownArrow = () => {
    return <i className="fa-solid fa-angle-down"></i>;
  };

  const dropdownData = {
    aboutus: [
      {
        content: "AboutUs1",
        ref: "#",
      },
      {
        content: "AboutUs2",
        ref: "#",
      },
      {
        content: "AboutUs3",
        ref: "#",
      },
      {
        content: "AboutUs4",
        ref: "#",
      },
      {
        content: "AboutUs5",
        ref: "#",
      },
      {
        content: "AboutUs6",
        ref: "#",
      },
      {
        content: "AboutUs7",
        ref: "#",
      },
      {
        content: "AboutUs8",
        ref: "#",
      },
      {
        content: "AboutUs9",
        ref: "#",
      },
      {
        content: "AboutUs0",
        ref: "#",
      },
    ],
    uniqueFeatures: [
      {
        content: "Marital Counselling",
        ref: "/uniquefeature/maritialcounselling",
      },
      {
        content: "Pre-Marital Counseling ",
        ref: "/uniquefeature/premaritalcounseling",
      },
      {
        content: "Post-Marital Counseling ",
        ref: "/uniquefeature/postmaritalcounselling",
      },
      {
        content: "Career Counselling",
        ref: "/uniquefeature/careercounseling",
      },
      {
        content: "Anxiety Counseling",
        ref: "/uniquefeature/anxietycounseling",
      },
      {
        content: "Depression Counseling",
        ref: "/uniquefeature/depressioncounseling",
      },
      {
        content: "Insomnia/Sleep Problem Counseling",
        ref: "/uniquefeature/insomniacounseling",
      },
      {
        content: "Traumatic Counseling",
        ref: "/uniquefeature/traumaticcounseling",
      },
      {
        content: "Cognitive Behavioral Therapy",
        ref: "/uniquefeature/cbt",
      },
      {
        content: "Parenting Counselling",
        ref: "/uniquefeature/parentingcounselling",
      },
      {
        content: "Family Counseling",
        ref: "/uniquefeature/familycounselling",
      },
      {
        content: "Child Counseling",
        ref: "/uniquefeature/childcounselling",
      },
      {
        content: "Group Counseling",
        ref: "/uniquefeature/groupcounselling",
      },
      {
        content: "Stress Management Counseling",
        ref: "/uniquefeature/stressmanagementcounselling",
      },
      {
        content: "Mental Health Counseling",
        ref: "/uniquefeature/mentalhealthcounselling",
      },
    ],
    services: [
      {
        content: "Service 1",
        ref: "#",
      },
      {
        content: "Service 2",
        ref: "#",
      },
      {
        content: "Service 3",
        ref: "#",
      },
      {
        content: "Service 4",
        ref: "#",
      },
      {
        content: "Service 5",
        ref: "#",
      },
      {
        content: "Service 6",
        ref: "#",
      },
      {
        content: "Service 7",
        ref: "#",
      },
      {
        content: "Service 8",
        ref: "#",
      },
      {
        content: "Service 9",
        ref: "#",
      },
      {
        content: "Service 0",
        ref: "#",
      },
    ],
    testimonial: [
      {
        content: "Testimonial 1",
        ref: "#",
      },
      {
        content: "Testimonial 2",
        ref: "#",
      },
      {
        content: "Testimonial 3",
        ref: "#",
      },
      {
        content: "Testimonial 4",
        ref: "#",
      },
      {
        content: "Testimonial 5",
        ref: "#",
      },
      {
        content: "Testimonial 6",
        ref: "#",
      },
      {
        content: "Testimonial 7",
        ref: "#",
      },
      {
        content: "Testimonial 8",
        ref: "#",
      },
      {
        content: "Testimonial 9",
        ref: "#",
      },
      {
        content: "Testimonial 0",
        ref: "#",
      },
    ],
    caseStudies: [
      {
        content: "Case Study 1",
        ref: "#",
      },
      {
        content: "Case Study 2",
        ref: "#",
      },
      {
        content: "Case Study 3",
        ref: "#",
      },
      {
        content: "Case Study 4",
        ref: "#",
      },
      {
        content: "Case Study 5",
        ref: "#",
      },
      {
        content: "Case Study 6",
        ref: "#",
      },
      {
        content: "Case Study 7",
        ref: "#",
      },
      {
        content: "Case Study 8",
        ref: "#",
      },
      {
        content: "Case Study 9",
        ref: "#",
      },
      {
        content: "Case Study 0",
        ref: "#",
      },
    ],
    blogs: [
      {
        content: "Blog 1",
        ref: "#",
      },
      {
        content: "Blog 2",
        ref: "#",
      },
      {
        content: "Blog 3",
        ref: "#",
      },
      {
        content: "Blog 4",
        ref: "#",
      },
      {
        content: "Blog 5",
        ref: "#",
      },
      {
        content: "Blog 6",
        ref: "#",
      },
      {
        content: "Blog 7",
        ref: "#",
      },
      {
        content: "Blog 8",
        ref: "#",
      },
      {
        content: "Blog 9",
        ref: "#",
      },
      {
        content: "Blog 0",
        ref: "#",
      },
    ],
  };

  const DropDownContent = (section) => {
    return dropdownData[section].map((menu, index) => (
      <Link to={menu.ref}>{menu.content}</Link>
    ));
  };
  return (
    <>
      <div
        id="Navbar"
        style={{
          backgroundColor: `${location.pathname !== "/" ? "white" : ""}`,
          color: `${location.pathname !== "/" ? "black" : "white"}`,
        }}
      >
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/thebraintakeLogo.png`}
            alt=""
          />
        </Link>
        <div>
          <ul
            className="upperdiv"
            onMouseEnter={() => {
              setisDropdownActive(false);
            }}
          >
            <button class="button">
              Book Appointment
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <a>Shop</a>
            <a>Contact Us</a>
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </ul>
          <ul className={isScrolled ? "lowerscrolled" : "lowerdiv"}>
            <Link to="/" className="imglowerdiv">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Images/thebraintakeLogo.png`}
                alt=""
              />
            </Link>
            <a
              onMouseEnter={() => {
                setsection("aboutus");
                setisDropdownActive(true);
              }}
            >
              About Us <DropdownArrow />{" "}
            </a>
            <a
              onMouseEnter={() => {
                setsection("uniqueFeatures");
                setisDropdownActive(true);
              }}
            >
              Unique features <DropdownArrow />{" "}
            </a>
            <a
              onMouseEnter={() => {
                setsection("services");
                setisDropdownActive(true);
              }}
            >
              Services <DropdownArrow />{" "}
            </a>
            <a
              onMouseEnter={() => {
                setsection("testimonial");
                setisDropdownActive(true);
              }}
            >
              Testimonials <DropdownArrow />{" "}
            </a>
            <a
              onMouseEnter={() => {
                setsection("caseStudies");
                setisDropdownActive(true);
              }}
            >
              Case Studies <DropdownArrow />{" "}
            </a>
            <a
              onMouseEnter={() => {
                setsection("blogs");
                setisDropdownActive(true);
              }}
            >
              Blogs <DropdownArrow />{" "}
            </a>
          </ul>
        </div>
      </div>
      {isDropdownActive ? (
        <div
          id="dropdown"
          style={isScrolled ? { top: "9vh" } : { top: "18vh" }}
          onMouseLeave={() => {
            setisDropdownActive(!isDropdownActive);
          }}
        >
          <ul className="level1dd">{DropDownContent(section)}</ul>
        </div>
      ) : (
        <></>
      )}
      {isScrolled ? <BottomtoTopBtn /> : <></>}
    </>
  );
}

export default Navbar;
