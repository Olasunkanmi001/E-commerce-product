import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Aside from './Component/Aside'




const App = () => {
  return (
    <div className='w-[100vw]'>
      <Header/>
     <div className='md:flex w-[100vw] md:gap-10 md:pt-10 md:px-10'>
     <Main/>
     <Aside/>

     </div>


    </div>
  )
}

export default App