import { useReducer } from "react";

const initialState = {
  cart: []
};



function reducer(state, action) {

  switch (action.type) {

    case "ADD_ITEM": {

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {

        return {
          ...state,

          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          )
        };
      }

      return {
        ...state,

        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      };
    }


    case "REMOVE_ITEM":

      return {
        ...state,

        cart: state.cart.filter(
          (item) => item.id !== action.payload
        )
      };


    case "INCREASE_QUANTITY":

      return {
        ...state,

        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      };


    case "DECREASE_QUANTITY":

      return {
        ...state,

        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
          )
          .filter((item) => item.quantity > 0)
      };


    case "CLEAR_CART":

      return {
        ...state,
        cart: []
      };


    default:
      return state;
  }
}


function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );


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

    dispatch({
      type: "ADD_ITEM",
      payload: product
    });
  }


  function removeItem(id) {

    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  }


  function increaseQuantity(id) {

    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id
    });
  }


  function decreaseQuantity(id) {

    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id
    });
  }


  function clearCart() {

    dispatch({
      type: "CLEAR_CART"
    });
  }


  const total = state.cart.reduce(
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

      {state.cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        state.cart.map((item) => (

          <div key={item.id}>

            <h3>{item.name}</h3>

            <p>
              Price: ₹{item.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>


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


      {state.cart.length > 0 && (

        <button onClick={clearCart}>
          Clear Cart
        </button>

      )}

    </div>
  );
}

export default App;