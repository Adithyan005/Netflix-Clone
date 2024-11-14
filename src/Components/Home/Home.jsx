import React from 'react'
import ext from "../../assets/ext.webp"
import extr from "../../assets/ext.png"
import Navbar from '../Navbar/Navbar'
import "../../App.css"

const Home = () => {

  const container =()=> {
    backgroundImage:`url(${ext})`
  }
  return (
    <div style={container}>
      <div className='top-0'>
        <Navbar/>
      <div className='relative'>
        <img src={ext} alt="" className='img'/>
        <div className='absolute bottom-4 p-4'>
        <img src={extr} alt="" className='w-[50%]'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
