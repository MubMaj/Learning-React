import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import {API_D_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useResturantList from "../utils/useResturantList";

const BodyComponent = () => {
  const listOfResturants = useResturantList('https://proxy.cors.sh/'+API_D_URL);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState([]);

  useEffect(() => {
    if (!listOfResturants || listOfResturants.length > 0) {
      setfilteredList(listOfResturants);
    }
  }, [listOfResturants]);

  const handleSearch = () => {
    const searchTextString = typeof searchText === "string" ? searchText : "";
    const newfilterlist = listOfResturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTextString.toLowerCase())
    );
    setfilteredList(newfilterlist);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  


  return !listOfResturants || listOfResturants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div>
      <main className="Body">
        <div className="filter">
          <div className="search-box">
            <input
              type="text"
              className="filter-search border border-black"
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
                let filteredlist = listOfResturants.filter(
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
                let filteredlist = listOfResturants;
                setfilteredList(filteredlist);
              }}
            >
              Reset Restaurant
            </button>
          </div>
        </div>
        <div className="font-bold mx-56 px-2 py-4 text-xl">
          Total {filteredList.length} Restaurant
        </div>
        <div className="items-center flex mx-44">
          <div className="flex flex-wrap justify-between">
            {filteredList.map((restu) => (
              <Link
                className="res-link"
                key={restu.info.id}
                to={"/restaurants/" + restu.info.id}
              >
                <RestaurantCard resData={restu} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BodyComponent;
