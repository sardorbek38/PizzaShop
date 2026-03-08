import React from "react";
import "./Hero.css";
import Pizza from "../../assets/Pizza.png";
import Pizza01 from "../../assets/fries.png";
import Cooking from "../../assets/Cooking.jpg";
import heroPizza from "../../assets/Delivery.png";
import Light from "../../assets/Light.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__circle hero__circle--1"></div>
      <div className="hero__circle hero__circle--2"></div>

      <div className="hero__content">
        <div className="hero__left">
          <h1 className="hero__title">
            The Fastest <br />
            Pizza <span className="hero__bolt"> <img src={Light} alt="zhong" /> </span> Delivery
          </h1>
          <p className="hero__desc">
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late – <strong>pizza is free</strong>!
          </p>

          <div className="hero__video-block">
            <p className="hero__video-label">Cooking process:</p>
            <div className="hero__video-thumb">
              <img src={Cooking} alt="Cooking process" />
              <button className="hero__play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hero__buttons">
            <button className="btn-orange hero__btn-order">To order</button>
            <button className="btn-outline hero__btn-menu">Pizza-Menu</button>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__image-wrap">
            <img src={heroPizza} alt="Pizza" className="hero__pizza-img" />
            <div className="hero__float hero__float--fries">
              <img className="Pizza_01" src={Pizza01} alt="Fries" />
            </div>
            <div className="hero__float hero__float--slice">
              <img className="Pizza" src={Pizza} alt="Pizza slice" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__arrow">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path
            d="M10 10 Q60 5 110 50"
            stroke="#ff6b00"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            fill="none"
          />
          <path
            d="M100 45 L110 50 L104 42"
            stroke="#ff6b00"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
