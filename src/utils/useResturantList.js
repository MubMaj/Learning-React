import { useEffect, useState } from "react";

const useResturantList = (API_URL) => {
  const [listOfResturants, setlistOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    setlistOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfResturants);

  return listOfResturants;
};

export default useResturantList;
