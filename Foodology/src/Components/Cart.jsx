import { CDN_URL } from "../utils/img";


const Cart = ({res})=>{

    console.log(res)

    return(
   <div className="container h-[400px] w-[200px] bg-gray-400 p-4 m-2">
    
   <img className="h-[200px]" src={CDN_URL+res.info.cloudinaryImageId}></img>
    <h2></h2>
    <h3 className="font-bold text-2xl">{res.info.name}</h3>
    <h4>{res.info.costForTwo}</h4>
    <p>{res.info.avgRating}</p>
    <p>{res.info.areaName}</p>
   </div> )
}


export default Cart;