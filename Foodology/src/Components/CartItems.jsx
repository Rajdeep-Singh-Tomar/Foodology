import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards.jsx"
import { clearCart } from "../utils/cartSlice.jsx";

const CartItems =()=>{

  const cartItem = useSelector((store)=>(store.cart.items));
   const dispatch = useDispatch()
  const handleclearcart=()=>{
       dispatch(clearCart())
  }

  return(
  <div className=" text-center m-4 ">
   <h1 className="font-bold text-2xl">Cart</h1>
     <button className="bg-black text-white rounded-lg p-2" onClick={handleclearcart}>clear cart</button>
   <div className="mt-8 m-auto mr-40 ml-40  border border-black">
      
    <ItemCards item={cartItem}/>
   </div>
  </div>
  )
}

export default CartItems;