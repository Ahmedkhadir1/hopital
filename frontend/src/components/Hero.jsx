import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          L'Institut médical ZeeCare est un établissement de pointe qui se consacre à la prestation de services de santé complets avec compassion et expertise. 
          Notre équipe de professionnels qualifiés s'engage à fournir des soins personnalisés adaptés aux besoins de chaque patient. 
          Chez ZeeCare, nous donnons la priorité à votre bien-être, 
          en vous garantissant un parcours harmonieux vers une santé et un bien-être optimaux.


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
