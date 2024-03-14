import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resArr from "../utils/mockData";


const BodyComponent = () => {

  let [listOfResturants2, setlistOfResturants2] = useState(resArr);
  
  return (
    <div>
      <main className="Body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setlistOfResturants2()
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
