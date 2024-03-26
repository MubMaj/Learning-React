import Itemlist from "./Itemlist";

const RestaurantCatargory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    showItems ? setShowIndex("off") : setShowIndex();
  };

  return (
    <div className="mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <Itemlist items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCatargory;