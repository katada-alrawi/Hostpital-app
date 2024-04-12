import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At the heart of our institution lies a deep commitment to providing
            unparalleled healthcare services. With a blend of cutting-edge
            technology and compassionate care, we strive to exceed expectations
            and foster a culture of wellness and healing.
          </p>
          <p>
            Steeped in the values of integrity, empathy, and innovation, we are
            not just a medical facility but a beacon of hope for those in need.
            Our dedicated team of professionals works tirelessly to ensure that
            every patient receives personalized attention and comprehensive care
            tailored to their unique needs.
          </p>
          <p>
            In the ever-evolving landscape of healthcare, we stand firm in our
            mission to make a meaningful impact on the lives of individuals and
            communities alike. With a spirit of collaboration and a relentless
            pursuit of excellence, we embark on each day with renewed
            determination to uphold the highest standards of medical practice
            and patient-centered care.
          </p>
          <p>
            Welcome to our world of healing and compassion, where every
            interaction is infused with warmth and empathy. Join us as we
            continue to redefine the boundaries of healthcare, one patient at a
            time.
          </p>
          <p>We are all in 2024!</p>
          <h3>We are working on a FULL STACK PROJECT.</h3>
          <p>
            Welcome to our world of innovation and care. Join us on a journey
            where coding meets compassion, and every line of code we write is a
            step towards enhancing lives and making a difference.
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
