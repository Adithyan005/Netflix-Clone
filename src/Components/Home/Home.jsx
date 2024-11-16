import React from 'react'
import extraction from "../../assets/ext.jpg"
import Navbar from '../Navbar/Navbar'

const Home = () => {

  const container={
    
    backgroundSize:"cover",
    backgroundPositon:"center"
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
