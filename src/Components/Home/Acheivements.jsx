import React from "react";

function Acheivements() {
  return (
    <div id="Acheivements">
      <h1>Our Acheivements</h1>
      <div>
        <div className="one-special-acheivement">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/AboutUs/Awards/certificate4.jpeg`}
            alt=""
          />
          <div>
            <p>
              Dr. Vijay Dwivedi was recently honored with a distinguished
              certificate from the WNHO INSTITUTE OF SEXOLOGY, acknowledging his
              remarkable accomplishment in earning a Ph.D. in Sexology and
              Psychosexual Counseling. This achievement underscores Dr.
              Dwivedi's unwavering dedication, profound expertise, and steadfast
              commitment to the counseling domain.
            </p>
          </div>
        </div>
        <div className="one-acheivement">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/AboutUs/Awards/certificate2.jpg`}
            alt=""
          />
          <div>
            <p>
              Dr. Vijay Dwivedi was proudly awarded a prestigious certificate by
              the International College of Teachers and Trainers, recognizing
              his outstanding achievement in completing the rigorous Diploma in
              Child Psychology. This accomplishment stands as a testament to Dr.
              Dwivedi's dedication, expertise, and commitment to the field of
              counseling.
            </p>
          </div>
        </div>
        <div className="one-acheivement">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/AboutUs/Awards/certificate6.jpeg`}
            alt=""
          />
          <div>
            <p>
              Dr. Vijay Dwivedi received a distinguished certificate from Dega
              Institute and Clinevomedvidya, recognizing his remarkable
              accomplishment in successfully completing the Master Class in
              Clinical Sexology. This achievement underscores Dr. Dwivedi's
              unwavering dedication, expertise, and commitment to the field of
              counseling.
            </p>
          </div>
        </div>
        <div className="one-acheivement">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/AboutUs/Awards/certificate1.jpg`}
            alt=""
          />
          <div>
            <p>
              Dr. Vijay Dwivedi was proudly honored with a prestigious
              certificate by the International College of Teachers and Trainers,
              acknowledging his exceptional achievement in completing the
              rigorous Diploma in Counseling. This accomplishment is a testament
              to Dr. Dwivedi's dedication, expertise, and unwavering commitment
              to the counseling profession.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acheivements;
