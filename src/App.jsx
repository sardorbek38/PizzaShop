import React from "react";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Popular from "./components/Popular/Popular";
import Events from "./components/Events/Events";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Nav />
        <Cart />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="menu">
            <Menu />
          </section>
          <section id="popular">
            <Popular />
          </section>
          <section id="events">
            <Events />
          </section>
          <section id="about">
            <About />
          </section>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
