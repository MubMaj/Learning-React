import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { Res_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Res_API_URL + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || "";

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || "";

  console.log(itemCards);

  return resInfo === null ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        <h4>Recommended Item</h4>
        <li>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Just for Rs.{" "}
              {(item.card.info.price || item.card.info.defaultPrice) / 100}{" "}
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
