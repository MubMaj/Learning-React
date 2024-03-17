import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";

const BodyComponent = () => {
  let [listOfResturants2, setlistOfResturants2] = useState([]);

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
  };

  return listOfResturants2.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div>
      <main className="Body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setlistOfResturants2();
              let filteredlist = listOfResturants2.filter(
                (res) => res.info.avgRatingString > 4
              );
              setlistOfResturants2(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {listOfResturants2.map((restu) => (
            <RestaurantCard key={restu.info.id} resData={restu} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BodyComponent;
