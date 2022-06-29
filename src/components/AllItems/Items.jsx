import React, { useState, useEffect } from 'react';
import { RiRefreshFill } from "react-icons/ri";

//Animation
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useStateValue } from '../../context/StateProvider';
import { AiOutlineDelete } from 'react-icons/ai';
///REducer
import { actionType } from '../../context/reducer';
export const Items = () => {

    const [{ cartItems }, dispatch] = useStateValue();
    //Quantity Sate
    const [qty, setqty] = useState("1");
    //Script for update price according quantity
    const [storageCartData,setStorageData] = useState(JSON.parse(localStorage.getItem('cartItems')));
    const onChange = (e) => {
        setqty(e.target.value)
        const cartDataExits = cartItems?.filter(n => n.itemId === e.target.id)
        const oldCartData = cartDataExits[0];
        if (e.target.value >= 1) {
            oldCartData.quantity = e.target.value;
        } else {
            oldCartData.quantity = "1";
        }
        //reducer changings 
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [...cartItems],oldCartData
        });
        localStorage.setItem('cartItems', JSON.stringify([...cartItems],oldCartData));

    }
    //Delete Item from Cart
    const deleteCartItem = (itemId) => {
        const deletedData = cartItems?.filter(n => n.itemId !== itemId)
        //reducer changings 
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: deletedData
        });
        localStorage.setItem('cartItems', JSON.stringify(deletedData));
        setStorageData(deletedData)
    }
    //Clear Cart Item
    const deleteAllCartItem = () => {
        localStorage.setItem('cartItems', JSON.stringify([]));
        //reducer changings 
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: []
        });
        setStorageData([])
    }
     //getToal Sum
     let totalSum = 0; 
     cartItems && cartItems?.map(n => { totalSum+=((parseInt(n.price) * parseInt(n.quantity)))})
     console.log(totalSum)
    useEffect(() => {
    
     
    }, [storageCartData]);
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="col-lg-12 col-sm-12">
          <h3 className="title mb-4">SHOPPING CART</h3>
      </div>
      <div className="col-lg-12 col-sm-12 tbl-container bdr">
              <div className="table-responsive ">
                  <table className="table table-bordered tbl-cart">
                      <thead>
                          <tr>
                              <td className="hidden-xs">Image</td>
                              <td>Product Name</td>
                              <td className="td-qty">Quantity</td>
                              <td>Sub Total</td>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              cartItems?.map(cartData => {
                                  const { title, imageAsset, itemId, price, quantity } = cartData;
                                  return (
                                      <tr key={itemId}>
                                          <td className="hidden-xs header">
                                              <AiOutlineDelete onClick={() => deleteCartItem(itemId)} className='me-4 ms-4' />
                                              <img src={imageAsset} alt={imageAsset} title="imageAsset" width="47" height="47" />
                                          </td>
                                          <td>{title}
                                          </td>
                                          <td>
                                              <input type="number" id={itemId} defaultValue={quantity || 1} className="input-qty form-control text-center" style={{ "display": "block" }} onChange={onChange} width="10%"  min={1} />
                                          </td>
                                          <td className="price">$ {price * (quantity || 1)}</td>
                                      </tr>
                                  )
                              })
                          }
                          <tr>
                              <td colSpan="3" align="right">Total</td>
                              <td className="total" colSpan="2"><b>$ {totalSum} </b>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
        // <div>
        //     {/* CartItem Modal Show */}
        //     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        //         <div className="modal-dialog " style={{maxWidth: "90%",margin: "3.6rem auto"}}>
        //             <div className="modal-content container newItem">
        //                 <div className="main_cartItemDiv">
        //                     <motion.button type='button' whileTap={{ scale: 0.6 }} className='btn button' data-bs-dismiss="modal" ><MdOutlineKeyboardBackspace /></motion.button>
        //                     <h2 className="modal-title " id="staticBackdropLabel">Cart</h2>
        //                     <motion.button whileTap={{ scale: 0.8 }} type="button" className='btn button' onClick={ deleteAllCartItem} data-bs-dismiss="modal" >Clear<RiRefreshFill /></motion.button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <div className="container bootdey">
        //                         <div className="row bootstrap snippets">
        //                             <div className="clearfix visible-sm"></div>
        //                             {/* <!-- Cart --> */}
        //                             {
        //                                 cartItems.length >0 ?
        //                                     <div className="col-lg-12 col-md-12 col-sm-12">
        //                                         <div className="col-lg-12 col-sm-12">
        //                                             <h3 className="title mb-4">SHOPPING CART</h3>
        //                                         </div>
        //                                         <div className="col-lg-12 col-sm-12 tbl-container bdr">
        //                                                 <div className="table-responsive ">
        //                                                     <table className="table table-bordered tbl-cart">
        //                                                         <thead>
        //                                                             <tr>
        //                                                                 <td className="hidden-xs">Image</td>
        //                                                                 <td>Product Name</td>
        //                                                                 <td className="td-qty">Quantity</td>
        //                                                                 <td>Sub Total</td>
        //                                                             </tr>
        //                                                         </thead>
        //                                                         <tbody>
        //                                                             {
        //                                                                 cartItems?.map(cartData => {
        //                                                                     const { title, imageAsset, itemId, price, quantity } = cartData;
        //                                                                     return (
        //                                                                         <tr key={itemId}>
        //                                                                             <td className="hidden-xs header">
        //                                                                                 <AiOutlineDelete onClick={() => deleteCartItem(itemId)} className='me-4 ms-4' />
        //                                                                                 <img src={imageAsset} alt={imageAsset} title="imageAsset" width="47" height="47" />
        //                                                                             </td>
        //                                                                             <td>{title}
        //                                                                             </td>
        //                                                                             <td>
        //                                                                                 <input type="number" id={itemId} defaultValue={quantity || 1} className="input-qty form-control text-center" style={{ "display": "block" }} onChange={onChange} width="10%"  min={1} />
        //                                                                             </td>
        //                                                                             <td className="price">$ {price * (quantity || 1)}</td>
        //                                                                         </tr>
        //                                                                     )
        //                                                                 })
        //                                                             }
        //                                                             <tr>
        //                                                                 <td colSpan="3" align="right">Total</td>
        //                                                                 <td className="total" colSpan="2"><b>$ {totalSum} </b>
        //                                                                 </td>
        //                                                             </tr>
        //                                                         </tbody>
        //                                                     </table>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                          :
        //                                          <h1>Not data Yat</h1>
        //                                  }
        //                                          {/* <!-- End Cart --> */}
        //                                     </div>                                           
        //                         </div>
        //                     </div>
        //                     <div className="modal-footer">
        //                         <motion.button whileTap={{ scale: 0.6 }} type="button" className='btn' onClick={() => window.print()}>Print</motion.button>
        //                         <motion.button whileTap={{ scale: 0.6 }} type="button" className="btn button">Check Out</motion.button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            )
}
