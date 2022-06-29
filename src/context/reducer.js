export const actionType = {
    SET_USER: "SET_USER",
    GET_FOODITEMS: " GET_FOODITEMS",
    GET_CATEGORYITEMS: " GET_CATEGORYITEMS",
    SET_CARTITEMS : "Set_CARTITEMS"
}
export const reducer = (state, action ) => {
    switch (action.type) {
        case actionType.SET_USER:{
            return {
                ...state,
                user: action.user
            }
        }   
        break;
        case actionType.GET_FOODITEMS:{
            return {
                ...state,
                foodItems: action.foodItems
            }
        } 
        break;
        case actionType.GET_CATEGORYITEMS:{
            return {
                ...state,
                categoryItems: action.categoryItems
            }
        } 
        break;
        case actionType.SET_CARTITEMS:{
            return {
                ...state,
                cartItems: action.cartItems
            }
        }   
        default:
            return state;
    }
}