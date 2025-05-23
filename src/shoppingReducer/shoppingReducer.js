import { TYPES } from "./shoppingActions";


export function shoppingReducer(state, action) { //type , payload
    switch (action.type) {
        case TYPES.ADD_TO_CART: {}
        case TYPES.REMOVE_ONE_ITEM: {}
        case TYPES.REMOVE_ALL_ITEMS: {}
        case TYPES.CLEAR_CART: {}
        default:
            return state;
    }
}
