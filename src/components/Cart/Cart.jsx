import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    showCartPage,
    setShowCartPage,
    removeFromCart,
    updateQty,
    totalPrice,
  } = useCart();

  if (!showCartPage) return null;

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <button
          className="cart-page__back"
          onClick={() => setShowCartPage(false)}
        >
          ← Back to the home
        </button>
        <div className="cart-page__logo">
          <span className="logo-pizza">pizza</span>
          <span className="logo-shop">shop</span>
        </div>
      </div>

      <div className="cart-page__content">
        {cartItems.length === 0 ? (
          <div className="cart-page__empty">
            <span>🍕</span>
            <p>Savat bo'sh!</p>
            <button
              className="cart-page__go-btn"
              onClick={() => setShowCartPage(false)}
            >
              Menuga qaytish
            </button>
          </div>
        ) : (
          <div className="cart-page__list">
            {cartItems.map((item) => (
              <div key={item.key} className="cart-row">
                <div className="cart-row__inner">
                  <div className="cart-row__left">
                    <img
                      src={item.pizza.image}
                      alt={item.pizza.name}
                      className="cart-row__img"
                    />
                    <div className="cart-row__info">
                      <h2 className="cart-row__name">{item.pizza.name}</h2>
                      <p className="cart-row__filling">{item.pizza.filling}</p>
                      <p className="cart-row__price">
                        {item.pizza.price.toFixed(2)}$
                      </p>

                      <div className="cart-row__sizes">
                        {item.pizza.sizes.map((s) => (
                          <button
                            key={s}
                            className={`cart-row__size ${item.size === s ? "cart-row__size--active" : ""}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="cart-row__controls">
                    <button
                      className="cart-row__btn cart-row__btn--minus"
                      onClick={() => updateQty(item.key, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className="cart-row__qty">{item.qty}</span>
                    <button
                      className="cart-row__btn cart-row__btn--plus"
                      onClick={() => updateQty(item.key, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-row__total">
                    <span className="cart-row__total-label">Total Price</span>
                    <span className="cart-row__total-price">
                      {(item.pizza.price * item.qty).toFixed(2)}$
                    </span>
                    <button
                      className="cart-row__remove"
                      onClick={() => removeFromCart(item.key)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-page__footer">
              <div className="cart-page__grand-total">
                <span>Jami:</span>
                <strong>{totalPrice.toFixed(2)}$</strong>
              </div>
              <button className="cart-page__order-btn">
                Buyurtma berish →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
