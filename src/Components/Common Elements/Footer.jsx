import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="Footer">
      <div id="newletter">
        <div id="lhs">
          <label htmlFor="newsletter-email">Subscribe to our news alerts</label>
          <span>
            <input type="email" id="newsletter-email" />
            <button>Subscribe</button>
          </span>
        </div>
        <div id="rhs">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/psycotex_pvt_ltd?igsh=MWlldWVreTRxbnJi">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div id="lower-footer-div">
        <h4>About Us</h4>
        <div>
          <Link to="/aboutus/directorsmessage">Directors Message</Link>
          <Link to="/aboutus/missionvisionandvalues">
            Mission Values and Vision
          </Link>
          <Link to="/aboutus/team">Our Team</Link>
          <Link to="/aboutus/offices">Offices</Link>
          <Link to="/aboutus/awards">Awards</Link>
        </div>
        <h4>Unique Features</h4>
        <div>
          <Link to="/uniquefeature/maritialcounselling">
            Marital Counselling
          </Link>
          <Link to="/uniquefeature/premaritalcounseling">
            Pre-Marital Counseling
          </Link>
          <Link to="/uniquefeature/postmaritalcounselling">
            Post-Marital Counseling
          </Link>
          <Link to="/uniquefeature/careercounseling">Career Counselling</Link>
          <Link to="/uniquefeature/anxietycounseling">Anxiety Counseling</Link>
          <Link to="/uniquefeature/depressioncounseling">
            Depression Counseling
          </Link>
          <Link to="/uniquefeature/insomniacounseling">
            Insomnia/Sleep Problem Counseling
          </Link>
          <Link to="/uniquefeature/traumaticcounseling">
            Traumatic Counseling
          </Link>
          <Link to="/uniquefeature/cbt">Cognitive Behavioral Therapy</Link>
          <Link to="/uniquefeature/parentingcounselling">
            Parenting Counselling
          </Link>
          <Link to="/uniquefeature/familycounselling">Family Counseling</Link>
          <Link to="/uniquefeature/childcounselling">Child Counseling</Link>
          <Link to="/uniquefeature/groupcounselling">Group Counseling</Link>
          <Link to="/uniquefeature/stressmanagementcounselling">
            Stress Management Counseling
          </Link>
          <Link to="/uniquefeature/mentalhealthcounselling">
            Mental Health Counseling
          </Link>
        </div>
        <h4>Services</h4>
        <h4 className="uniqfooter">Psychological Counseling</h4>
        <div>
          <Link to="/services/psychologicalcounselling/substanceabuseoraddictioncounselling">
            Substance Abuse or Addiction Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/interpersonalpsychotherapy">
            Interpersonal Psychotherapy
          </Link>
          <Link to="/services/psychologicalcounselling/overthinkingcounselling">
            Overthinking Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/motivationalcounselling">
            Motivational Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/sexcounselling">
            Sex Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/personcenteredtherapy">
            Person Centered Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/griefcounselling">
            Grief Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/dialecticalbehaviourcounselling">
            Dialectical Behaviour Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/solutionfocusedbrieftherapy">
            Solution-Focused Brief Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/narrativetherapy">
            Narrative Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/rationalemotivetherapy">
            Rational Emotive Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/emotionallyfocusedtherapy">
            Emotionally Focused Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/playtherapy">
            Play Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/arttherapy">
            Art Therapy
          </Link>
          <Link to="/services/psychologicalcounselling/rehabilitationcounselling">
            Rehabilitation Counseling
          </Link>
          <Link to="/services/psychologicalcounselling/humanisticpsychology">
            Humanistic Psychology
          </Link>
          <Link to="/services/psychologicalcounselling/gestalttherapy">
            Gestalt Therapy
          </Link>
        </div>
        <h4 className="uniqfooter">Sexology Counseling</h4>
        <div>
          <Link to="/services/sexologycounselling/erectiledysfunction">
            Erectile Dysfunction
          </Link>
          <Link to="/services/sexologycounselling/lowlibido">Low Libido</Link>
          <Link to="/services/sexologycounselling/lackofinterest">
            Lack of Interest
          </Link>
          <Link to="/services/sexologycounselling/prematureejaculation">
            Premature Ejaculation
          </Link>
          <Link to="/services/sexologycounselling/lowconfidence">
            Low Confidence
          </Link>
          <Link to="/services/sexologycounselling/lackofresponsetosexualstimulus">
            Lack of Response to Sexual Stimulus
          </Link>
          <Link to="/services/sexologycounselling/inabilitytoreachorgasm">
            Inability to Reach Orgasm
          </Link>
          <Link to="/services/sexologycounselling/excessivelibido">
            Excessive Libido
          </Link>
          <Link to="/services/sexologycounselling/distressingsexualthoughtsunwanted">
            Distressing Sexual Thoughts Unwanted
          </Link>
          <Link to="/services/sexologycounselling/inabilitytocontrolsexualbehaviour">
            Inability to Control Sexual Behavior
          </Link>
          <Link to="/services/sexologycounselling/issuesrelatingtosexualtrauma">
            Issues relating to Sexual Trauma
          </Link>
          <Link to="/services/sexologycounselling/somaticsextherapy">
            Somatic Sex Therapy
          </Link>
          <Link to="/services/sexologycounselling/pelvicfloorphysicaltherapy">
            Pelvic Floor Physical Therapy
          </Link>
        </div>
        <h4 className="uniqfooter">Psychological Testing</h4>
        <div>
          <Link to="/services/psychologicaltesting/basiccounselling">
            Basic Counseling
          </Link>
          <Link to="/services/psychologicaltesting/personalcounselling">
            Personal Counseling
          </Link>
          <Link to="/services/psychologicaltesting/dmittest">DMIT Test</Link>
          <Link to="/services/psychologicaltesting/psychometricassessment">
            Psychometric Assessment
          </Link>
          <Link to="/services/psychologicaltesting/careersuitabilitytest">
            Career Suitability Test
          </Link>
          <Link to="/services/psychologicaltesting/intelligencebuildingprogram">
            Intelligence Building Program
          </Link>
          <Link to="/services/psychologicaltesting/midbrainactivation">
            MidBrain Activation
          </Link>
        </div>
        <div>
          <h4>
            <Link to="/testimonials">Testimonials </Link>
          </h4>
          <h4>
            <Link to="/casestudies">Case Studies </Link>
          </h4>
          <h4>
            <Link to="/blogs">Blogs </Link>
          </h4>
        </div>
      </div>
      <div id="right-reserved">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Images/thebraintakeLogo.png`}
          alt=""
        />
        <p>
          © {new Date().getFullYear()} Psycortex Pvt. Ltd. All rights reserved.
        </p>
        <ul>
          <Link to={"/psycortex/privacypolicy"}>Private Policy</Link>
          <Link to={"/psycortex/termsandcondition"}>Terms & Conditions</Link>
          <Link to={"/psycortex/returnpolicy"}>Return Policy</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
