import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, setShowCartPage } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">
        <a href="#home" className="nav__logo">
          <span className="nav__logo-pizza">pizza</span>
          <span className="nav__logo-shop">shop</span>
        </a>

        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          <li>
            <a href="#home" className="nav__link nav__link--active">
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className="nav__link">
              Menu
            </a>
          </li>
          <li>
            <a href="#events" className="nav__link">
              Events
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              About us
            </a>
          </li>
        </ul>

        <div className="nav__right">
          <button className="nav__login">Log in</button>

          <button className="nav__cart" onClick={() => setShowCartPage(true)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalCount > 0 && (
              <span className="nav__cart-badge">{totalCount}</span>
            )}
          </button>

          <button
            className="nav__burger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
