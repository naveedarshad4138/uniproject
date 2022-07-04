import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineCheckSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import { AlertBox } from '../AlertBox';

export const FoodItems = (props) => {
    const [{ cartItems }, dispatch] = useStateValue();
    //Alert Box 
    const initialState = {
        fields: false,
        alertStatus: 'danger',
        
    }
    const [conditions, setConditions] = useState(initialState);
    //State for Checked Item
    const [selectedItem, setselectedItem] = useState(false);
    const { title, imageAsset, calories, price, itemId } = props;
    const cartData = { title, imageAsset, calories, price, itemId,quantity:'1' };
    //Check cart item exits in localstorage or not
    const storageCartId = JSON.parse(localStorage.getItem('cartItems'));
    //=> ////////Add Cart data inlocalstorage check item exits or not in local storage /////////////
    const addToCart = (cartData) => {
        //=>Add Cart Data in localstorage 
        const addCartDataLocal = () => {
            const cartItemData = [...cartItems, cartData]
            dispatch({
                type: actionType.SET_CARTITEMS,
                cartItems: cartItemData
            });
            localStorage.setItem('cartItems', JSON.stringify(cartItemData))
        }
        
        if (storageCartId.length) {
            const cartDataExits = storageCartId && storageCartId?.filter(n => { return n.itemId === itemId })
            if (cartDataExits.length === 1) {
                setselectedItem(true)
                //Show Alert
                setConditions({
                    fields: true,
                    msg: "Item Already Selected",
                    alertStatus: "danger",
                    selectedItem: true
                });
                setTimeout(() => {
                    setConditions({
                        fields: '',
                    })
                }, 4000);
            } else {
                setselectedItem(true);
                addCartDataLocal();
            }
        } else {
            setselectedItem(true)
            addCartDataLocal();
        }
    }
    useEffect(() => {
        //Check Cart Selected Status
        const cartDataExits = cartItems && cartItems?.filter(n => { return n.itemId === itemId })
        if (cartDataExits.length === 1) {
            setselectedItem(true)
        }else{
            setselectedItem(false)
        }
    }, [addToCart]);
    return (
        <div>
            {
                conditions.fields && (
                    <AlertBox alertStatus={conditions.alertStatus} msg={conditions.msg} />
                )
            }
                <div className=" container main_card" key={itemId}>
                <div className="picCard">
                    <img className="itemPic" src={imageAsset} alt="fooItem" width="10%" />   
                {  
                      selectedItem ?<AiOutlineCheck className='cartPic' data-bs-toggle="tooltip" data-bs-placement="top" title="Item Added"  onClick={() => addToCart(cartData)}/>:<AiOutlineShoppingCart className='cartPic' data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart" onClick={() => addToCart(cartData)} />
                }
                </div>
                <div className="main_card_body">
                    <span><b>{title}</b></span>
                    <span>{calories} Calories</span>
                    <span><b style={{ color: "#ffc800" }}>$</b> {price}</span>
                </div>
            </div>    
        </div>
    )
}
