import { TYPES } from "./shoppingActions";
import { shoppingInitialState } from "./shoppingInitialState";

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart
      }
    }
    case TYPES.ADD_TO_CART: {
      // ID de tarjeta -> action.payload -> number
      // DB -> state.products -> []
      // Carrito -> state.cart -> []
      // filter() => [{}]
      // find() =>　elemento / undefined
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );

      // Revisar en el carrito si algun el id de algun item coincide con el del newItem
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      console.log(itemInCart);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) => {
              return item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) => {
              return item.id === itemToDelete.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item;
            }),
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== itemToDelete.id)
        };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        };
    }
    case TYPES.CLEAR_CART: {
        return shoppingInitialState
    }
    default:
      return state;
  }
}
