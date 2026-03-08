import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo">
            <span className="footer__logo-pizza">pizza</span>
            <span className="footer__logo-shop">shop</span>
          </div>

          <div className="footer__col">
            <h4>Home</h4>
            <ul>
              <li>
                <a href="#home">To Order</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Events</h4>
            <ul>
              <li>
                <a href="#events">3 Pizza 1 Free Coffee</a>
              </li>
              <li>
                <a href="#events">2 Pizza for 1 Price</a>
              </li>
              <li>
                <a href="#events">Kitchen Tour</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#menu">Show All</a>
              </li>
              <li>
                <a href="#menu">Seaproducts</a>
              </li>
              <li>
                <a href="#menu">Vegan</a>
              </li>
              <li>
                <a href="#menu">Meat</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#about">Our History</a>
              </li>
              <li>
                <a href="#about">Why We?</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <a href="tel:+79373335533" className="footer__phone">
            +7 (937) 333-55-33
          </a>

          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <a href="#" className="footer__social" aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.85 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.56v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 0 1-2.04.08c.58 1.8 2.25 3.1 4.24 3.14A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.39-.02-.58A9.17 9.17 0 0 0 22 5.05 9.02 9.02 0 0 1 23 3z" />
              </svg>
            </a>

            <a href="#" className="footer__social" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
