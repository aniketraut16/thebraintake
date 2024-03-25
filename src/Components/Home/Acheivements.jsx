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
              Dr. Vijay Dwivedi was proudly awarded a prestigious certificate by
              WNHO INSTITUTE OF SEXOLOGY, recognizing his outstanding
              achievement in completing Phd in Sexology and Psychosexual
              Counselling. This accomplishment stands as a testament to Dr.
              Dwivedi's dedication, expertise, and commitment to the field of
              counseling.
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
              Dr. Vijay Dwivedi was proudly awarded a prestigious certificate by
              Dega Institute and Clinevomedvidya, recognizing his outstanding
              achievement in completing the Master Class in Clinical Sexology.
              This accomplishment stands as a testament to Dr. Dwivedi's
              dedication, expertise, and commitment to the field of counseling.
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
              Dr. Vijay Dwivedi was proudly awarded a prestigious certificate by
              the International College of Teachers and Trainers, recognizing
              his outstanding achievement in completing the rigorous Diploma in
              Counseling. This accomplishment stands as a testament to Dr.
              Dwivedi's dedication, expertise, and commitment to the field of
              counseling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acheivements;
