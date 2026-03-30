import useRestorantMenu from "../utils/useRestorantMenu";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestorantCategory from "./RestorantCategory";



const Restorant=()=>{ 
   const {resId} = useParams();

   const resInfo = useRestorantMenu(resId);
   const [showIndex,setshowIndex] = useState(null);

 if(resInfo?.error) return <h1>Unable to load the restaurant menu right now.</h1>;

 if(resInfo === null) return <h1>loading....</h1>
  
   const {costForTwoMessage,city,name ,cuisines,avgRatingString} = resInfo?.cards?.[2]?.card?.card?.info ?? {};
  //  const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
   
  // console.log( resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ?? [];
  //  console.log(categories);
    return(
        <div className="menu text-center">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h3>{costForTwoMessage}</h3>
            <p>{cuisines?.join(", ")}</p>
            <p>{avgRatingString}</p>
            
            {categories.map((cat,index)=>{
             return <RestorantCategory key={cat.card.card.categoryId} cat={cat.card.card} 
             show={index===showIndex ? true : false}
             setshowIndex={()=>setshowIndex(index)}
              />
            })}
            
            
        </div>
    )
}
export default Restorant;
