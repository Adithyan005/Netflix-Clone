import React from 'react'
import Navbar from '../Navbar/Navbar'
import maharaj from "../../assets/maharaj.jpg"
import mahr from "../../assets/mahr.png"

const Home = () => {

  const container={
    backgroundImage:`url(${maharaj})`,
    backgroundSize:"cover",
    backgroundPositon:"center",
    height:"100vh",
    width:"100vw"
  };

  return (
    <div style={container}>
      <div className='relative'>
        <Navbar/>
      </div>
      <div className='absolute bottom-40 left-5'>
        <img src={mahr} alt="" className='w-[25rem]'/>
        
      </div>
      
    </div>
  )
}

export default Home
