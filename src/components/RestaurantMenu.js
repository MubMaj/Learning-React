import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { Res_API_URL, Res_IMG_URL } from "../utils/constants";

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

  const { itemCards, title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || "";

  return resInfo === null ? (
    <ShimmerComponent />
  ) : (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <div className="Menu">
        <h3>Menu</h3>
        <h4>{title}</h4>
        <ul className="res-item-list">
          {itemCards?.map((item) => (
            <li className="riil" key={item?.card?.info?.id}>
              <div>
                {item?.card?.info?.name} - Just for Rs.
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </div>
              {item?.card?.info?.imageId ? (
                <div className="riil-img-container">
                  <img src={Res_IMG_URL + item?.card?.info?.imageId}></img>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
