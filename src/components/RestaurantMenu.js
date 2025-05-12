import { useEffect, useState } from "react";
// import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CDN_URL} from '../utils/constants';
import {AiOutlineStar } from 'react-icons/ai';
import { FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
//    const [resInfo, setResInfo] = useState(null);
   const {resId} = useParams();
   const dummy = 'Dummy Data';
   const resInfo = useRestaurantMenu(resId);
   const [showIndex, setShowIndex] = useState(null);

if(resInfo === null) return <Shimmer/>;

const { 
    name, 
    cuisines, 
    cloudinaryImageId, 
    avgRating, 
    sla, 
    costForTwo 
} = resInfo?.cards[2]?.card?.card?.info;

const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
// console.log("itemcards",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>                      
        c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
)
// console.log("Categories",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
// console.log("Categories", categories);
// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
//    const { restaurants } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card;
//    console.log(resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
return (
    // <div className="menu">
    //     <h1>{name}</h1>
    //     <p>
    //         {cuisines.join(", ")} - {costForTwo}
    //     </p>
    //     <h2>menu</h2>
    //     <ul>
    //         {itemCards.map((item)=> (
    //             <li key={item.card.info.id}>
    //                 {item.card.info.name} ={" Rs. "}
    //                 {costForTwo}
    //             </li>
    //         ))}
    //     </ul>
    // </div>
       <div className="text-center">
        <h1 className = "font-bold my-6 text-2xl">{name}</h1>
        <p className= "font-bold text-lg">
            {cuisines.join(', ')} - ₹ {costForTwo/100}
        </p>
        {/* {categories.map((category) => (
            
            <RestaurantCategory key={category?.card?.card.id} data={(category?.card?.card)
                
            }/>
            
        ))} */}
        {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              dummy={dummy} />
        ))}
        
       </div>
   );
};

export default RestaurantMenu;