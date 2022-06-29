import React from 'react';
import { FaMotorcycle } from "react-icons/fa";

export const MainOrderCard = () => {
    return (
        <>
        <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="containerMain">
                    <img src="assets/HomePageImg/mainOrderCard.jpg" alt="Cinque Terre" width="1000" height="300" />
                    <div className="mainContainer2">
                        <div className="card orderCard">
                            <div className="card-header py-4">
                                <button> Bike Devliver <span><FaMotorcycle /></span></button>
                            </div>
                            <div className="card-body ">
                                <h1 className="card-title">The Fastest Delivery <span>in Your City</span></h1>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="button btn">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        
        </>
        
    )
}
