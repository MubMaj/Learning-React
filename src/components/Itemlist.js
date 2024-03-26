import { CDN_URL } from "../utils/constants";

function Itemlist({ items }) {
  return (
    <div className="bg-gray-100 rounded-xl">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 flex"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - ₹{item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs p-4 text-wrap">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 bg-black text-white shadow-black shadow-md rounded-sm m-auto mx-1    ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Itemlist;
