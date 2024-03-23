import { useEffect, useState } from "react";

const useResturantList = (API_URL) => {
  const [listOfResturants2, setlistOfResturants2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    let json = await data.json();

    setlistOfResturants2(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturants2;
};

export default useResturantList;
