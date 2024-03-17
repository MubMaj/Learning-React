import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";

const BodyComponent = () => {
  const [listOfResturants2, setlistOfResturants2] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4300572&lng=81.7869042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();

    setlistOfResturants2(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const searchTextString = typeof searchText === "string" ? searchText : "";
    const filterlist = listOfResturants2.filter((res) =>
      res.info.name.toLowerCase().includes(searchTextString.toLowerCase())
    );
    setfilteredList(filterlist);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return listOfResturants2.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div>
      <main className="Body">
        <div className="filter">
          <div className="search-box">
            <input
              type="text"
              className="filter-search"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              onKeyDown={handleKeyPress}
            ></input>
            <button className="filter-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="filter-container">
            <button
              className="filter-btn"
              onClick={() => {
                let filteredlist = listOfResturants2.filter(
                  (res) => res.info.avgRatingString > 4
                );
                setfilteredList(filteredlist);
              }}
            >
              Top Rated Restaurant
            </button>
            <button
              className="filter-btn"
              onClick={() => {
                let filteredlist = listOfResturants2;
                setfilteredList(filteredlist);
              }}
            >
              Reset Restaurant
            </button>
          </div>
        </div>
        <div className="res-container">
          {filteredList.map((restu) => (
            <RestaurantCard key={restu.info.id} resData={restu} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BodyComponent;
