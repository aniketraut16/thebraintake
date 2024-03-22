import React from "react";
import "./AboutUs.css";

function DirectorsMessage() {
  return (
    <div id="DirectorsMessage">
      <div className="breadcrumb">{" About Us > Directors Message"} </div>
      <div className="onedirector">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/Images/AboutUs/DirectorsMessage/dr. dwivedi.jpeg"
          }
          alt=""
        />
        <div className="drinfo">
          <span>
            <h1>DR. VIJAY DWIVEDI</h1>
            <p>Director | Psycortex Brain Take Mental Health Pvt. Ltd.</p>
          </span>
          <bold>Dear Valued Audience,</bold>

          <p>
            I am honored to extend a warm welcome to you on behalf of Psycortex
            Brain Take Mental Health Pvt. Ltd. As the Director of our
            organization, I am privileged to lead a team of dedicated
            professionals who are committed to transforming the landscape of
            mental health care.
          </p>
          <p>
            At Psycortex, we understand the challenges and complexities
            individuals face when it comes to mental well-being. Our mission is
            rooted in the belief that everyone deserves access to compassionate,
            effective, and personalized mental health support. Whether you are
            seeking guidance for yourself, a loved one, or your organization, we
            are here to accompany you on your journey towards greater mental
            wellness.
          </p>
          <p>
            Our approach is characterized by integrity, compassion, innovation,
            collaboration, and excellence. These values are not just words on
            paper but principles that guide every aspect of our work. We
            prioritize your needs, ensuring that you feel heard, respected, and
            empowered throughout your experience with us. Through cutting-edge
            research, evidence-based practices, and advanced technology, we
            strive to offer you the highest quality of care. Our team of
            experienced professionals is here to provide personalized solutions
            tailored to your unique circumstances, helping you navigate
            life&#39;s challenges with confidence and resilience.
          </p>
          <p>
            As we embark on this journey together, I invite you to explore the
            resources, services, and support that Psycortex has to offer.
            Whether you are seeking therapy, coaching, assessments, or
            educational resources, you can trust that you are in capable hands.
            Thank you for entrusting us with your mental health and well-being.
            We look forward to partnering with you to achieve your goals,
            overcome obstacles, and cultivate a life of fulfillment and joy.
          </p>
        </div>
      </div>
      <div className="onedirector">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/Images/AboutUs/DirectorsMessage/drshukla.jpeg"
          }
          alt=""
        />

        <div className="drinfo">
          <span>
            <h1>DR. RASHMI SHUKLA</h1>
            <p>Director | Psycortex Brain Take Mental Health Pvt. Ltd.</p>
          </span>
          <bold>Dear Esteemed Members,</bold>
          <p>
            It is with great pleasure that I extend my warmest greetings to you
            on behalf of Psycortex Brain Take Mental Health Pvt. Ltd. As the
            Director of our esteemed organization, I am honored to lead a team
            of passionate professionals dedicated to redefining the standards of
            mental health care.
          </p>
          <p>
            At Psycortex, we recognize the profound impact that mental
            well-being has on every aspect of our lives. Our mission is to
            provide comprehensive, compassionate, and personalized support to
            help you navigate the complexities of the human mind with confidence
            and resilience. We understand that seeking help for mental health
            concerns can be a daunting step, which is why we are committed to
            creating a safe and welcoming environment where you can feel heard,
            understood, and empowered.
          </p>
          <p>
            Our team of highly skilled therapists, counselors, and specialists
            are here to guide you on your journey towards healing and growth.
            With a focus on integrity, compassion, innovation, collaboration,
            and excellence, we strive to offer you the highest standard of care.
          </p>
          <p>
            Through evidence-based practices, cutting-edge research, and
            state-of-the-art technology, we tailor our services to meet your
            unique needs and preferences. Whether you are struggling with
            anxiety, depression, trauma, or simply seeking personal growth and
            self-discovery, we are here to support you every step of the way.
            Our goal is to help you unlock your full potential, cultivate
            resilience, and live a life filled with purpose and fulfilment.
          </p>
          <p>
            Thank you for entrusting us with your mental health and well-being.
            We are deeply committed to your journey towards healing and look
            forward to partnering with you to achieve your goals and
            aspirations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DirectorsMessage;
