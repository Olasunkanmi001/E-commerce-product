import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { useState } from 'react';
import { useContext } from 'react';
import { countContext } from '../App';
// import { createContext } from 'react';








// export const myContext = createContext()

const Aside = () => {
const count = useContext(countContext)

console.log(count)


    const add = () => {

 count.setChange(count.Change + 1)
    }
//     const minus = () => {
//         mydata = mydata - 1
//         if (mydata === 0){
//             mydata = 0

//         }
//     }
const minus = () => {

    count.setChange(count.Change - 1)

    if (count.Change === 0) {
        count.setChange(count.Change);
    }



    
       }
    

// const counter = () => {
    
    
  
   
// }



  return (
  
    <div>
      <div className='px-3 py-7 md:w[35%] lg:pt-36 '>
        <h6 className='text-[#6D7176] font-bold text-sm mb-3'>SNEAKER COMPANY</h6>
        <h1 className='text-3xl font-extrabold mb-3 lg:text-6xl lg:mb-14 lg:font-extrabold lg:mt-10'>Fall Limited Edition Sneakers</h1>
        <h5 className='text-[#6D7176] font-light'>These low-profilesneakers are your perfect casual wear companion. Feauturing a durable rubber outer sole, they'll withstand everything the weather can offer.</h5>


        <div className='flex justify-around gap-28 px-3 mt-3'>
           <div className='flex gap-3'>
            <h1 className='text-xl font-bold'>$125.00</h1>
            <h3 className='text-white border bg-black rounded-lg px-2'>50%</h3>
           </div>
           <h1 className='line-through text-[#707479]'>$250.00</h1>

        </div>
       <div className='md:flex md:gap-5 lg:mt-10'>
       <div className='flex justify-between bg-[#F7F8FD] h-14 rounded-2xl px-5 py-3 text-[#F1863B] text-2xl font-extrabold mt-6 md:w-40'>
            <button onClick={()=>{minus()}}>-</button>
            <h1>{count.Change}</h1>
           <button onClick={()=>{add()}}>+</button>
        </div>

        <div className='mt-3'>
            <button onClick={()=>{counter()}} className='flex justify-center bg-[#F1863B] h-14 py-4 gap-3 font-bold w-[350px] rounded-2xl md:w-[200px] md:mt-3'> <BsCart2 className=' w-6 h-6'/> Add to cart</button>
        </div>
       </div>

    </div>
    </div>
 
  )
}

export default Aside