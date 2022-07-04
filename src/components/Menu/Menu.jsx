import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FoodItems } from '../ShowFoods/FoodItems';
import { useStateValue } from '../../context/StateProvider';
export const Menu = () => {
    
    //get foodsitems from reducer
    const [{ foodItems, categoryItems }] = useStateValue();
    const initialFilterValue = categoryItems && categoryItems[0].categoryName
    const [filterCategory, setFilterCategory] = useState(initialFilterValue);
    const filterCategoryData = foodItems?.filter(n => n.category === filterCategory);
    useEffect(() => {
    }, [filterCategory]);
    useEffect(() => {
        setFilterCategory(categoryItems && categoryItems[0].categoryName)
    }, [foodItems]);
    return (
        <div className='main_menu'>
            {
                foodItems &&
                <>
                    <div className='container mt-4'>
                        <h3 className='mt-4'>Our Hot Menu</h3>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-pills mb-3 justify-content-center container" id="pills-tab" role="tablist">
                                {
                                categoryItems?.map(category => {
                                    return (
                                        <li key={category.categoryId} className="nav-item" role="presentation">
                                            <motion.button whileTap={{ scale: 0.8 }} className={`btn ${filterCategory === category.categoryName ? "active" : ""}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => setFilterCategory(category.categoryName)}>{category.categoryName}</motion.button>
                                        </li>
                                      
                                    )
                                }
                                )}
                            </ul>
                            <div className="row my-4 justify-content-center">
                                {
                                    filterCategoryData?.map((foodItem,index) => {
                                        const { category ,calories, imageAsset, price, title, itemId } = foodItem;
                                        return (                                            
                                            <div className="col-sm-12 col-md-4 col-lg-4">
                                                <FoodItems key={itemId} title={title} calories={calories} imageAsset={imageAsset} price={price} itemId={itemId}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    </div>
                </>
            }

        </div>
    )
}
