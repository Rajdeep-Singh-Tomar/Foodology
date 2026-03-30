import { Link } from "react-router-dom"
import { useContext } from "react";

import { useState } from "react";
import { logo } from "../utils/logo";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = ()=>{
  const [btn,setbtn] = useState("logout")

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=>(store.cart.items));
  console.log(cartItems)


  return(
    <div className="header flex justify-between h-25 bg-pink-300 p-10 items-center">
      <Link to={"/"}><img className="h-[70px] w-[70px]" src={logo} alt="logo"></img></Link>
        <ul className="flex gap-4">
        <Link to={"/"}> <li className="font-bold text-xl">home</li></Link> 
        <Link to={"/cart"} >  <li className="font-bold text-xl">cart -({cartItems.length} items)</li></Link>
         <Link to={"/contact"}> <li className="font-bold text-xl">contact us</li></Link>
         <Link to={"/about"}><li className="font-bold text-xl">About</li></Link>
         
          <button className="font-bold text-sm bg-red-400 h-10 w-15 rounded-lg" onClick={()=>{setbtn(!btn)}} >{btn?"login":"louout"}</button>;
          <p>{loggedInUser}</p>
            
        </ul>
    </div>
  )
}

export default Header
