import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantInfo from "../utils/useResturantInfo";
import { Res_API_URL } from "../utils/constants";
import RestaurantCatargory from "./RestaurantCatargory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useResturantInfo(Res_API_URL, resID);

  const cardInfo = (resInfo?.cards || []).find(
    (card) => card?.card?.card?.info
  );
  const { name, cuisines, costForTwoMessage } =
    cardInfo?.card?.card?.info || {};

  const cuisineString = Array.isArray(cuisines) ? cuisines.join(", ") : "";

  const regularCards = (resInfo?.cards || []).find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const category =
    regularCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return resInfo === null ? (
    <ShimmerComponent />
  ) : (
    <div className="flex flex-col justify-between mx-64">
      <div className="">
        <h2 className="font-bold my-6 text-xl">{name}</h2>
        <p>
          {cuisineString} <br></br> {costForTwoMessage}
        </p>
      </div>
      <div>
        {category &&
          Array.isArray(category) &&
          category.map((c, index) => (
            <RestaurantCatargory
              key={index}
              data={c.card.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={(e) => {
                e === "off" ? setShowIndex(null) : setShowIndex(index);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
