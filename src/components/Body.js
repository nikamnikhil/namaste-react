import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local State Variables - super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setFilteredList(
              listOfRestaurants?.filter((restaurants) =>
                restaurants?.info?.name
                  .toLowerCase()
                  ?.includes?.(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(
              filteredList?.filter((res) => res?.info?.avgRating > 4.2)
            );
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredList?.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
