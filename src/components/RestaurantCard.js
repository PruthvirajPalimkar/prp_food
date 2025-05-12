import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {


    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;
    
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
       <div>
       <img
          className="w-[250px] h-[150px] rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="Biryani"
            />
       </div>
        <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>    
            <AiOutlineStar />{avgRating} stars</h4>
        <h4 className="item-price">
          {costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <span className="icons">
          <FiClock/>
        </span>
        {/* <h4>User: {loggedInUser}</h4> */}
        </div>
      </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
    <div>
      {/* <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label> */}
      <RestaurantCard {...props}/>
    </div>
    );
  };
};

export default RestaurantCard;