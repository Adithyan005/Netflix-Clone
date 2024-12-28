import React from 'react'
import card_data from '../Cards_Data/Cards_Data'

const Title_Card = () => {
  return (
    <div>
      <h1>Popular on Netflix</h1>
      <div className='flex gap-10'>
       {card_data.map((card,index)=>{
        return <div key={index} className='text-white'>
            <img src={card.image} alt="" className='w-[90rem] '/>
            <p>{card.name}</p>
        </div>
       })}
      </div>
    </div>
  )
}

export default Title_Card
