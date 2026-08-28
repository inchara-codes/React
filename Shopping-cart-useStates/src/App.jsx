import { useState } from "react";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 60000
    },
    {
      id: 2,
      name: "Keyboard",
      price: 2000
    },
    {
      id: 3,
      name: "Mouse",
      price: 1000
    }
  ];

  function addToCart(product) {

    setCart((currentCart) => {

      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  }

  function removeItem(id) {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );
  }

  function increaseQuantity(id) {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (

        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <hr />

        </div>

      ))}

      <h2>Cart</h2>

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        cart.map((item) => (

          <div key={item.id}>

            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                removeItem(item.id)
              }
            >
              Remove
            </button>

            <hr />

          </div>

        ))

      )}

      <h2>
        Total: ₹{total}
      </h2>

      {cart.length > 0 && (

        <button onClick={clearCart}>
          Clear Cart
        </button>

      )}

    </div>
  );
}

export default App;

