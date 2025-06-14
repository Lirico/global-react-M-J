import { TYPES } from "@/shoppingReducer/shoppingActions";
import { useReducer, useEffect } from "react";
import { shoppingInitialState } from "@/shoppingReducer/shoppingInitialState";
import { shoppingReducer } from "@/shoppingReducer/shoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import axios from "axios";

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const {products, cart} = state;  // products: []

  const readState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:3001/products",
      cart: "http://localhost:3001/cart"
    }
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart)

    const productsList = responseProducts.data,
      cartItems = responseCart.data;

    dispatch({type: TYPES.READ_STATE, payload: {
      products: productsList,
      cart: cartItems
    }})
  }

  useEffect(() => {
    readState()
  }, [])
  

  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

  const deleteFromCart = (id, all) => {
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id})
    }
  }

  const clearCart = () => dispatch({type: TYPES.CLEAR_CART})

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {
          products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
        }
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {
          cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart}/>)
        }
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
