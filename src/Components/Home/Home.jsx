import React from 'react'
import Navbar from '../Navbar/Navbar'
import maharaj from "../../assets/maharaj.jpg"
import mahr from "../../assets/mahr.png"
import play from "../../assets/play.png"

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
        <p className='text-white'>ddfjdfsdfjdfdsifnsdnsdfsfksdkfnkdf</p>
        <div className='pt-5'>
          <div className='bg-white w-[6.5rem] font-stylish text-sm font-bold h-8 flex justify-center items-center'>
          <img src={play} alt="" className='w-9'/>
          <p>Play</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
