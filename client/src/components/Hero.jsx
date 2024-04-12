import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p className="hero-p">
            Welcome to Katada Health Center, where exceptional care meets
            compassionate service. Our center is equipped with the latest
            medical technology and staffed by a team of dedicated professionals
            committed to your well-being. We understand that each patient is
            unique, which is why we tailor our care to your individual needs.
            With a focus on personalized attention and holistic wellness, we are
            here to guide you on your path to health and vitality. Experience
            the difference at Katada Health Center, where your journey to
            wellness begins 
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
