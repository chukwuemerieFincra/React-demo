import './Card3.css'
import React from 'react'

const Card3 = ({image}) => {
  return (
  <>
    <div className='card3-container'>
        <div className='card3'>
            <img className='card3-image' src={image} alt=''/>
        </div>
      
    </div>
  </>
  )
}

export default Card3
