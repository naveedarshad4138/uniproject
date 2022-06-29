export const fetchCartItems = () => {
    const cartItemsData = 
     localStorage.getItem('cartItems') !=='undefined' && localStorage.getItem('cartItems') !== null?
    JSON.parse(localStorage.getItem('cartItems'))
    // console.log("items")
    :
    // console.log("emptyu")
    localStorage.setItem('cartItems', JSON.stringify([]));
    return cartItemsData ? cartItemsData : []
}