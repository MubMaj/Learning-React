import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card bg-[#f0f0f0] rounded-xl w-56 hover:shadow-lg">
      <div className="res-img-container">
        <img
          className="res-img"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div>
        <h3 className="res-heading">{name}</h3>
        <h4 className="res-rateing">
          {avgRating}* {sla.slaString}
        </h4>
        <h4 className="res-data">{cuisines.join(", ")}</h4>
        <h4 className="res-data">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
