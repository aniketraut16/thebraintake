import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function MobileNavbar() {
  const [isBurgerActive, setisBurgerActive] = useState(false);
  const [isLevel2Active, setisLevel2Active] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
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

  const handleAccordionClick = (event) => {
    const accordionButton = event.target;
    const content = accordionButton.nextElementSibling;

    // Close all accordions
    const allAccordionContents =
      document.querySelectorAll(".accordion-content");
    allAccordionContents.forEach((accordionContent) => {
      if (accordionContent !== content) {
        accordionContent.style.maxHeight = null;
        accordionContent.previousElementSibling.classList.remove("is-open");
      }
    });

    // Toggle the clicked accordion
    accordionButton.classList.toggle("is-open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Close the accordion
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Open the accordion
    }
  };

  const ServicesDropdown = () => {
    return (
      <>
        <span className="accordion" onClick={handleAccordionClick}>
          Psychological Counselling
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/substanceabuseoraddictioncounselling"
          >
            Substance Abuse or Addiction Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/interpersonalpsychotherapy"
          >
            Interpersonal Psychotherapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/overthinkingcounselling"
          >
            Overthinking Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/motivationalcounselling"
          >
            Motivational Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/sexcounselling"
          >
            Sex Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/personcenteredtherapy"
          >
            Person Centered Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/griefcounselling"
          >
            Grief Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/dialecticalbehaviourcounselling"
          >
            Dialectical Behaviour Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/solutionfocusedbrieftherapy"
          >
            Solution-Focused Brief Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/narrativetherapy"
          >
            Narrative Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/rationalemotivetherapy"
          >
            Rational Emotive Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/emotionallyfocusedtherapy"
          >
            Emotionally Focused Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/playtherapy"
          >
            Play Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/arttherapy"
          >
            Art Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/rehabilitationcounselling"
          >
            Rehabilitation Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/humanisticpsychology"
          >
            Humanistic Psychology
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicalcounselling/gestalttherapy"
          >
            Gestalt Therapy
          </Link>
        </div>
        <span className="accordion" onClick={handleAccordionClick}>
          Sexology Counselling
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/erectiledysfunction"
          >
            Erectile Dysfunction
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/lowlibido"
          >
            Low Libido
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/lackofinterest"
          >
            Lack of Interest
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/prematureejaculation"
          >
            Premature Ejaculation
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/lowconfidence"
          >
            Low Confidence
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/lackofresponsetosexualstimulus"
          >
            Lack of Response to Sexual Stimulus
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/inabilitytoreachorgasm"
          >
            Inability to Reach Orgasm
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/excessivelibido"
          >
            Excessive Libido
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/distressingsexualthoughtsunwanted"
          >
            Distressing Sexual Thoughts Unwanted
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/inabilitytocontrolsexualbehaviour"
          >
            Inability to Control Sexual Behavior
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/issuesrelatingtosexualtrauma"
          >
            Issues relating to Sexual Trauma
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/somaticsextherapy"
          >
            Somatic Sex Therapy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/sexologycounselling/pelvicfloorphysicaltherapy"
          >
            Pelvic Floor Physical Therapy
          </Link>
        </div>

        <span className="accordion" onClick={handleAccordionClick}>
          Psychological Testing
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/basiccounselling"
          >
            Basic Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/personalcounselling"
          >
            Personal Counselling
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/dmittest"
          >
            DMIT Test
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/psychometricassessment"
          >
            Psychometric Assessment
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/careersuitabilitytest"
          >
            Career Suitability Test
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/intelligencebuildingprogram"
          >
            Intelligence Building Program
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              setisLevel2Active(false);
            }}
            to="/services/psychologicaltesting/midbrainactivation"
          >
            MidBrain Activation
          </Link>
        </div>
      </>
    );
  };

  //Dropdown Contents

  const AboutUsDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);

            setisLevel2Active(false);
          }}
          to="/spansuit/systemprocessandtools"
        >
          Systems, Processes and Tools
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);

            setisLevel2Active(false);
          }}
          to="/spansuit/mobileappview"
        >
          Mobile APP
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);

            setisLevel2Active(false);
          }}
          to="/spansuit/brandprotection"
        >
          Brand Protection
        </Link>
      </>
    );
  };
  const UniqueFeatureDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/maritialcounselling"
        >
          Marital Counselling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/premaritalcounseling"
        >
          Pre-Marital Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/postmaritalcounselling"
        >
          Post-Marital Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/careercounseling"
        >
          Career Counselling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/anxietycounseling"
        >
          Anxiety Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/depressioncounseling"
        >
          Depression Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/insomniacounseling"
        >
          Insomnia/Sleep Problem Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/traumaticcounseling"
        >
          Traumatic Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/cbt"
        >
          Cognitive Behavioral Therapy
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/parentingcounselling"
        >
          Parenting Counselling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/familycounselling"
        >
          Family Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/childcounselling"
        >
          Child Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/groupcounselling"
        >
          Group Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/stressmanagementcounselling"
        >
          Stress Management Counseling
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/uniquefeature/mentalhealthcounselling"
        >
          Mental Health Counseling
        </Link>
      </>
    );
  };

  // Level 1 Handing Function

  const handleNavHover = (index) => {
    // Set dropdown content based on the hovered index
    switch (index) {
      case 1:
        setDropdownContent(<AboutUsDropdown />);
        setisLevel2Active(true);
        break;
      case 2:
        setDropdownContent(<ServicesDropdown />);
        setisLevel2Active(true);

        break;
      case 3:
        setDropdownContent(<UniqueFeatureDropdown />);
        setisLevel2Active(true);

        break;
      default:
        setDropdownContent(null);
    }
  };

  return (
    <div id="MobileNavbar">
      <div id="mobNav">
        <Link clasName="level1navLink" to="/">
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/thebraintakeLogo.png`}
            alt=""
          />{" "}
        </Link>
        <i className="fa-solid fa-magnifying-glass"></i>
        <div
          className="burger"
          onClick={() => {
            setisBurgerActive(!isBurgerActive);

            setisLevel2Active(false);
          }}
        >
          <div
            className="top"
            style={
              isBurgerActive
                ? { transform: "rotate(45deg) translateY(8px)" }
                : { transform: "rotate(0deg) translateY(0%)" }
            }
          ></div>
          <div
            className="middle"
            style={
              isBurgerActive
                ? { transform: "translateX(500%)" }
                : { transform: "translateX(0%)" }
            }
          ></div>
          <div
            className="bottom"
            style={
              isBurgerActive
                ? { transform: "rotate(-45deg) translateY(-8px)" }
                : { transform: "rotate(0deg) translateY(0%)" }
            }
          ></div>
        </div>
      </div>
      <div
        id="mobNavL1"
        style={isBurgerActive ? { right: "0%" } : { right: "-101%" }}
      >
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(1);
          }}
        >
          About Us
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(3);
          }}
        >
          Unique Features
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(2);
          }}
        >
          Services
        </span>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/testimonials"
        >
          Testimonials
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/casestudies"
        >
          Case Studies
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/blogs"
        >
          Blogs
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/contactus"
        >
          Contact Us
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/"
          className="my-account"
        >
          <i className="fa-solid fa-user"></i>
          Login
        </Link>
      </div>
      <div
        id="mobNavL2"
        style={isLevel2Active ? { right: "0%" } : { right: "-101%" }}
      >
        <div
          id="back-btn"
          onClick={() => {
            setisLevel2Active(false);
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
          Back
        </div>

        {dropdownContent}
      </div>
    </div>
  );
}

export default MobileNavbar;
