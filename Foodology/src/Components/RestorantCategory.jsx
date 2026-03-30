import React from 'react'
import ItemCards from './ItemCards'

const RestorantCategory = ({cat,show,setshowIndex}) => {

  
  const handleShow= ()=>{
    setshowIndex()
  }

  return (
    <div>
        <div className='border border-black w-160  items-center mx-auto my-4'>
         <div className='flex justify-between p-4' onClick={()=>{
          handleShow()
         }}>
         <span>{cat.title}</span>
          <span>🚿</span>
          </div>
          <hr/>
          {show &&<ItemCards item={cat.itemCards}/>}
          
      </div>
      
    </div>
  )
}

export default RestorantCategory
