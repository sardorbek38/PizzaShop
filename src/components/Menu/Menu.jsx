import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Menu.css";
import Menu1 from "../../assets/Menu-1.png";
import Menu2 from "../../assets/Menu-2.png";
import Menu3 from "../../assets/Menu-3.png";
import Menu4 from "../../assets/Menu-4.png";

const categories = [
  "Show All",
  "Meat",
  "Vegetarian",
  "Sea products",
  "Mushroom",
];

const pizzas = [
  {
    id: 1,
    name: "Italian",
    category: "Vegetarian",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 8.35,
    image: Menu1,
  },
  {
    id: 2,
    name: "Venecia",
    category: "Vegetarian",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 7.35,
    image: Menu2,
  },
  {
    id: 3,
    name: "Meat",
    category: "Meat",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 9.35,
    image: Menu3,
  },
  {
    id: 4,
    name: "Cheese",
    category: "Mushroom",
    filling:
      "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
    sizes: [22, 28, 33],
    defaultSize: 28,
    price: 8.35,
    image: Menu4,
  },
];

function PizzaCard({ pizza }) {
  const [selectedSize, setSelectedSize] = useState(pizza.defaultSize);
  const [qty, setQty] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleOrder = () => {
    addToCart(pizza, selectedSize, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="pizza-card">
      <div className="pizza-card__img-wrap">
        <img src={pizza.image} alt={pizza.name} className="pizza-card__img" />
      </div>
      <h3 className="pizza-card__name">{pizza.name}</h3>
      <p className="pizza-card__filling">{pizza.filling}</p>

      <div className="pizza-card__sizes">
        {pizza.sizes.map((s) => (
          <button
            key={s}
            className={`pizza-card__size ${selectedSize === s ? "pizza-card__size--active" : ""}`}
            onClick={() => setSelectedSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="pizza-card__ingredients"
        onClick={() => setShowIngredients(!showIngredients)}
      >
        + Ingredients
      </button>

      {showIngredients && (
        <p className="pizza-card__ingredients-text">
          Onion, potato, tomato, mushrooms, mozzarella cheese, olives, bell
          pepper
        </p>
      )}

      <div className="pizza-card__bottom">
        <span className="pizza-card__price">
          {(pizza.price * qty).toFixed(2)}
          <sup>$</sup>
        </span>
        <div className="pizza-card__qty">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <span>{qty}</span>
          <button
            className="pizza-card__qty-plus"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>
      </div>

      <button
        className={`pizza-card__order btn-orange ${added ? "pizza-card__order--added" : ""}`}
        onClick={handleOrder}
      >
        {added ? "✓ Qo'shildi!" : "Order Now"}
      </button>
    </div>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filtered =
    activeCategory === "Show All"
      ? pizzas
      : pizzas.filter((p) => p.category === activeCategory);

  return (
    <div className="menu">
      <div className="menu__container">
        <h2 className="section-title">Menu</h2>

        <div className="menu__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__tab ${activeCategory === cat ? "menu__tab--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
