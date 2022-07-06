import React from 'react';
import { FoodItems } from './FoodItems';
//=> Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStateValue } from '../../context/StateProvider';

export const ShowFoods = (props) => {
    //get foodsitems from reducer
    const [{ foodItems }, dispatch] = useStateValue();
    //CArousel REsponsiveness
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 564 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 564, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className='container main_foodItemDiv'>
            {
                foodItems && 
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h3>Our Fresh & Healthy Furits</h3>
                </div>
                {<Carousel className='carousel' infinite={true}
                    responsive={responsive} customTransition="all .5" transitionDuration={1000} showDots={true}
                    autoPlay={true}
                >
                    {
                        foodItems.slice(0, 9)?.map((foods,index) => {
                            const { calories, imageAsset, price, title,itemId } = foods;
                            return (
                                <FoodItems key={index}  title={title} calories={calories} imageAsset={imageAsset} price={price} itemId={itemId}/>
                            )
                        })
                    }
                </Carousel>}
            </div>
            }
            
        </div>
    )
}
