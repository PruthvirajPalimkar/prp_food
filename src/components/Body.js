import { useEffect, useState, useContext } from 'react';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurantCardPrommoted = withPromotedLabel(RestaurantCard);
  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered', listOfRestaurants); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
     const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false )
    return (
  <h1 style={{textAlign: 'center', marginTop: '100px'}}>
        Looks like you're offline!! Please check your internet connection
      </h1>
      );
const { setUserName, loggedInUser } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex">
        <div className="search m-4 p-4">   
          <input
            type="text"
            placeholder="Search a restaurant..."
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
          // className="bg-gray"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredRestaurant(filteredList);
            console.log(filteredList);
            
          }}
        >
          Top Rated Restaurants
        </button>
        <label>UserName : </label>
        <input className="border border-black p-2"
        placeholder='Type something here'
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
        />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link
          style={{
            textDecoration: 'none',
            color: '#000',
          }}
          key={restaurant.info.id}
          to={'/restaurants/'+ restaurant.info.id}
          >
              {restaurant.info.isOpen? (<RestaurantCardPrommoted resData={restaurant}/>
            ):(<RestaurantCard resData={restaurant}/>
            )}
            </Link>
          // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* console.log(restaurant.info.promoted); */}
      </div>
    </div>
  );
};

export default Body;
