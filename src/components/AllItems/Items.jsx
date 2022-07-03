import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
//Animation
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useStateValue } from '../../context/StateProvider';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
///REducer
import { actionType } from '../../context/reducer';
import { deleteItemById, fetchFoodItems, getItemById, saveItem } from '../../utils/FirebseFunctions';
import { AlertBox } from '../AlertBox';
import { AlertModal } from '../Modals/AlertModal';

export const Items = () => {
    const initialState = {
        fields: false,
        alertStatus: 'danger',
        msg: null,
        isLoading: false
    }
    const [conditions, setConditions] = useState(initialState);
    const admin_email = "naveedarshad4138@gmail.com";
    const [{ user, foodItems }, dispatch] = useStateValue();
    //Delete Item from Cart
    const deleteItem = async (itemId) => {
        deleteItemById('foodItems', itemId, dispatch, setConditions);
    }

    useEffect(() => {

    }, [foodItems]);
    return (
        <div className="container">
            {
                conditions.fields && (
                    <AlertBox alertStatus={conditions.alertStatus} msg={conditions.msg} />
                )
            }
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-12 col-sm-12 main_foodItemDiv d-flex justify-content-between">
                    <h3 className="title my-4">All Food Items</h3>
                    {
                        user && user.email === admin_email && <><Link to='/additem' className='my-4' type="button"><button className='button btn'><AiOutlinePlus /> Add Item </button></Link>

                        </>
                    }
                </div>
                <div className="col-lg-12 col-sm-12 tbl-container bdr">
                    <div className="table-responsive ">
                        {
                             foodItems && foodItems.length!==0?
                       
                        <table className="table table-bordered tbl-cart">
                            <thead>
                                <tr>
                                    <td className="hidden-xs">Image</td>
                                    <td>Product Name</td>
                                    <td className="td-qty">Category</td>
                                    <td>Calories</td>
                                    <td>Price</td>
                                    <td>Take Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                   foodItems.map(cartData => {
                                        const { title, imageAsset, itemId, price, category, calories } = cartData;
                                        return (
                                            <tr key={itemId}>
                                                <td className="hidden-xs header">

                                                    <img src={imageAsset} alt={imageAsset} title="imageAsset" width="47" height="47" />
                                                </td>
                                                <td className="price">{title}</td>
                                                <td className="price">{category}</td>
                                                <td className="price">{calories}</td>
                                                <td className="price">$ {price}</td>
                                                <td className="hidden-xs header">
                                                    {/* // <!-- Button trigger modal --> */}
                                                    <AiOutlineDelete type="button" data-bs-toggle="modal" data-bs-target="#staticBackdropAlertModal"
                                                        // onClick={() => deleteItem(itemId)}
                                                        className='me-4 ms-4' />
                                                    {/* {Alert Modal} */}
                                                    <AlertModal deleteItem={()=>deleteItem(itemId)} />
                                                    <Link to={`/updateitem/${itemId}`} className='my-4' type="button">                                                    <AiOutlineEdit className='me-4 ms-4' />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        :
                                <h1 className='text-center py-4'>Add Item see here </h1>
                            }
                    </div>
                </div>
            </div>

        </div>
    )
}
