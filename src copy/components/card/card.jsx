import React from 'react'
import './card.css'

const Card = ({body,icon,title}) => {
  return (
   <>
   <div className='card-container'>
    <div className='card-wrapper'>
      <div className='card'>
        <div className='card-up'>
          <img className='card-up-image' src={icon} alt='Icon'/>
        </div>
        <div className='card-down'>
          <h2 className='card-down-h2'>{title}</h2>
          <p className='card-down-p'> {body}</p>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Card
