import { fetchCartItems } from "../utils/LocalhostFunction"
const cartItemData = fetchCartItems()
export const initialState = {
    user:null || JSON.parse(localStorage.getItem('user')),
    foodItems: null,
    categoryItems: null,
    cartItems: cartItemData 
}