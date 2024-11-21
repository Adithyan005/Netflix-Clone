import React from 'react'
import Navbar from '../Navbar/Navbar'
import maharaj from "../../assets/maharaj.jpg"

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
      <div>
        <Navbar/>
      </div>
      
    </div>
  )
}

export default Home
