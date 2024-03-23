import { useEffect, useState } from "react";

const useResturantInfo = (Res_API_URL, resID) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const apiData = await fetch(Res_API_URL + resID);
        const json = await apiData.json();
        setResInfo(json.data);
      };

    return resInfo;

}

export default useResturantInfo;