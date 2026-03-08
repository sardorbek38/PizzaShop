import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Popular.css";
import most from "../../assets/MOST.jpg";

import Menu5 from "../../assets/Menu-5.png";
import Menu6 from "../../assets/Menu-6.png";
import Menu7 from "../../assets/Menu-7.png";
import Menu8 from "../../assets/Menu-8.png";

const popularPizzas = [
  {
    id: 5,
    name: "Argentina",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 7.35,
    image: Menu5,
  },
  {
    id: 6,
    name: "Gribnaya",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 6.35,
    image: Menu6,
  },
  {
    id: 7,
    name: "Tomato",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 7.35,
    image: Menu7,
  },
  {
    id: 8,
    name: "Italian x2",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 8.35,
    image: Menu8,
  },
];

function PopularCard({ pizza }) {
  const [selectedSize, setSelectedSize] = useState(pizza.defaultSize);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleOrder = () => {
    addToCart(pizza, selectedSize, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="popular-card">
      <div className="popular-card__img-wrap">
        <img src={pizza.image} alt={pizza.name} />
      </div>
      <h3 className="popular-card__name">{pizza.name}</h3>
      <p className="popular-card__filling">{pizza.filling}</p>

      <div className="popular-card__sizes">
        {pizza.sizes.map((s) => (
          <button
            key={s}
            className={`popular-card__size ${selectedSize === s ? "popular-card__size--active" : ""}`}
            onClick={() => setSelectedSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button className="popular-card__ingredients">+ Ingredients</button>

      <div className="popular-card__bottom">
        <span className="popular-card__price">
          {(pizza.price * qty).toFixed(2)}
          <sup>$</sup>
        </span>
        <div className="popular-card__qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button
            className="popular-card__qty-plus"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>
      </div>

      <button
        className={`popular-card__order ${added ? "popular-card__order--added" : ""}`}
        onClick={handleOrder}
      >
        {added ? "✓ Qo'shildi!" : "Order Now"}
      </button>
    </div>
  );
}

function Popular() {
  return (
    <div className="popular">
      <div className="popular__banner-wrapper">
        <div className="popular__banner">
          <img src={most} alt="Most popular" />
          <div className="popular__banner-overlay">
            <h2>MOST POPULAR PIZZA</h2>
          </div>
        </div>
      </div>

      <div className="popular__container">
        <div className="popular__grid">
          {popularPizzas.map((pizza) => (
            <PopularCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
