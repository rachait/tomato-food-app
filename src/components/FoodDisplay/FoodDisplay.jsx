import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext);

    console.log("Food List:", food_list);
    console.log("Selected Category:", category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>

            <div className='food-display-list'>

                {food_list &&
                    food_list.map((item) => {

                        if (
                            category === "All" ||
                            category === item.food_category
                        ) {
                            return (
                                <FoodItem
                                    key={item.food_id}
                                    id={item.food_id}
                                    image={item.food_image}
                                    name={item.food_name}
                                    desc={item.food_desc}
                                    price={item.food_price}
                                />
                            );
                        }

                        return null;
                    })}
            </div>
        </div>
    );
};

export default FoodDisplay;