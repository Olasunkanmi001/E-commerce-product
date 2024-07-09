import React from 'react'

const Aside = () => {
  return (
    <div className='px-3 py-7'>
        <h6 className='text-[#6D7176] font-bold text-sm mb-3'>SNEAKER COMPANY</h6>
        <h1 className='text-3xl font-extrabold mb-3'>Fall Limited Edition Sneakers</h1>
        <h5 className='text-[#6D7176] font-light'>These low-profilesneakers are your perfect casual wear companion. Feauturing a durable rubber outer sole, they'll withstand everything the weather can offer.</h5>


        <div className='flex justify-around gap-36 px-3 mt-3'>
           <div className='flex gap-3'>
            <h1>$125.00</h1>
            <h3 className='text-white border bg-black rounded-lg'>50%</h3>
           </div>
           <h1 className='line-through text-[#707479]'>$250.00</h1>

        </div>

    </div>
  )
}

export default Aside