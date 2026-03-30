import { useState,useEffect } from "react";

const useRestorantMenu = (resId) =>{

   const [resInfo,setresInfo] = useState(null);
   const [menuError, setMenuError] = useState(false);
   
useEffect(() => {
  const fetchData = async () => {
    try {
      setMenuError(false);
      const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2272188&lng=78.1489608&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const data = await response.json();
      setresInfo(data?.data ?? null);
    } catch {
      setMenuError(true);
      setresInfo(null);
    }
  };

  fetchData();
}, [resId])

 return menuError ? { error: true } : resInfo;

}
export default useRestorantMenu;
