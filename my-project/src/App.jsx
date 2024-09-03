import React, { useState } from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Aside from './Component/Aside'
import Cart from './Component/Cart'
import { createContext } from 'react'


export const countContext= createContext()





const App = () => {
  const [Change, setChange] = useState(0)
 
let ne = "h"
  return (
    <countContext.Provider value={{Change,setChange}} >
    <div className='w-[100vw]'>
      <Header/>
     <div className='md:flex w-[100vw] md:gap-10 md:pt-10 md:px-10'>
     <Main/>
     <Aside/>
     {/* <Cart/> */}

     </div>


    </div>
  </countContext.Provider>
  )
}

export default App