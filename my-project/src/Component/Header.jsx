import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import image1 from "./images/image-avatar.png"

const Header = () => {
    let menu = [{"name": "Collection"}, {"name": "Men"},{"name": "Woman"}, {"name": "About"},{"name": "Contact"} ]
  return (
    <div className='flex justify-around pt-7 gap-16 h-[100px] '>
        <div className='flex gap-3'>
        <GiHamburgerMenu className='text-[#6D7174] h-8 w-6 mt-1 md:hidden'/>
        <h1 className=' text-3xl font-extrabold'>Sneakers</h1>
        {
            menu.map((all)=>{
                return(
                    <button className='hidden md:flex md:ml-10 text-[#6D7174] md:mt-2 '>{all.name}</button>
                )
            })
        }
        </div>
       

        <div className='flex gap-5'>
        <BsCart2 className='text-[#6D7174] w-6 h-6'/>
        <img className='w-7 h-7' src={image1}/>
        </div>

    </div>
  )
}

export default Header