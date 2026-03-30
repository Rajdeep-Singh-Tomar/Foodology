import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemCards = ({item}) => {

   const dispatch = useDispatch(); 

  const handleListner = (i)=>{
   dispatch(addItem(i))
  }


  return (

   <div>
      {item.map((i)=>{
     return(<div className='cursor-pointer' key={i.card.info.id}> 
        <p className='font-bold'>{i.card.info.name}</p>
        <p>{i.card.info.description}</p>
        <button className='bg-black text-white p-2 rounded-lg cursor-pointer' onClick={()=>handleListner(i)}>+Add</button>
        <hr/>
     </div>)
      })}
   </div>
  )
}

export default ItemCards
