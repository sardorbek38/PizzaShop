import React from "react";
import "./About.css";

import pizza0 from "../../assets/About-img.jpg";
import pizza1 from "../../assets/pizza-1.png";
import pizza2 from "../../assets/pizza-2.png";
import pizza3 from "../../assets/pizza-3.png";
import pizza4 from "../../assets/pizza-4.png";
import pizza5 from "../../assets/pizza-5.png";
import frey from "../../assets/fries.png";

const pizzaImages = [pizza1, pizza2, pizza3, pizza4, pizza5];

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left">
          <h2 className="about__title">About us</h2>

          <p className="about__text">
            In just a couple of years, we have opened 6 outlets in different
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future
            we plan to develop the network in other major cities.
          </p>

          <div className="about__pizzas">
            {pizzaImages.map((src, i) => (
              <div
                key={i}
                className="about__pizza-circle"
                style={{
                  zIndex: pizzaImages.length - i,
                  marginLeft: i > 0 ? "-30px" : "0",
                }}
              >
                <img src={src} alt={`Pizza ${i + 1}`} />
              </div>
            ))}
          </div>

          <div className="about__arrow">
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
              <path
                d="M10 15 Q60 5 110 20"
                stroke="#ff6b00"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                fill="none"
              />
              <path
                d="M100 15 L110 20 L104 13"
                stroke="#ff6b00"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          <p className="about__text about__text--secondary">
            The kitchen of each point is at least: 400-500 sq. m. meters,
            hundreds of employees, smoothly performing work in order to receive
            / prepare / form / deliver customer orders on time.
          </p>
        </div>

        <div className="about__right">
          <div className="about__main-img">
            <img className="about__big-img" src={pizza0} alt="About pizza" />

            <div className="about__fries">
              <img className="Fries" src={frey} alt="Fries" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
