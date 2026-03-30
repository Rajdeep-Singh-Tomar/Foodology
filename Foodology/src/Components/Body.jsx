import Cart from "./Cart";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =()=>{
  const [RestorantList, setRestorantList] = useState([]);
  const [filter, setfilter] = useState("");
  const [filteredRestorant, setfilteredRestorant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const {setuserInfo} = useContext(UserContext);
  const fetchData =  async ()=>{
    try {
      setIsLoading(true);
      setErrorMessage("");
      const promise = await fetch(import.meta.env.VITE_URL_SWIGGY);
      const data = await promise.json();
      const restaurants =
        data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

      setRestorantList(restaurants);
      setfilteredRestorant(restaurants);

      if (restaurants.length === 0) {
        setErrorMessage("Restaurant data is unavailable right now.");
      }
    } catch {
      setErrorMessage("Unable to load restaurants right now.");
      setRestorantList([]);
      setfilteredRestorant([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
   fetchData();
  }, []);


 const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)return(<h1>seems like you are offline!!!!please check your internet connection</h1>)

if(isLoading)return<h1>loading.....</h1>
if(errorMessage)return<h1>{errorMessage}</h1>

  return(
  <div className="body">
   <div className="filter flex gap-2 items-center">
      <div className="search m-4">
         <input className=" border-2 border-black rounded-sm" type="text" value={filter} onChange={(e)=>{
            setfilter(e.target.value)
         }} />
         <button className="font-bold text-sm bg-red-400 h-8 w-12 rounded-lg" onClick={()=>{
          let filterRestorant = RestorantList.filter((res)=>
            res.info.name.toLowerCase().includes(filter.toLowerCase()));
           setfilteredRestorant(filterRestorant);
         }}>search</button>
      </div>
          <button className="font-bold text-sm bg-red-400 h-10 w-20 rounded-lg m-4"   onClick={()=>{
      let fiter = RestorantList.filter((res)=>Number(res.info.avgRating) >= 4)
       setfilteredRestorant(fiter)
    }}>Top rated restorant</button>

    <label>username:</label>
    <input   className="border border-black" onChange={(e)=>setuserInfo(e.target.value)}  />
     </div>

  {filteredRestorant.length === 0 ? (
    <h2 className="m-4">No restaurants found.</h2>
  ) : (
  <div className="res-container flex flex-wrap gap-[10px]">
      {
            filteredRestorant.map((res)=>
              <Link key={res.info.id} to={"/restorants/"+res.info.id}>
                <Cart  res={res}  /></Link> 
            )
        }
  </div>
  )}
  </div>)
}

export default Body;
