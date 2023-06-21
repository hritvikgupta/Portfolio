import React, { useContext } from 'react'
import './Crousel.css'
export const CardCrousel = ({pic}) => {
  return (
    <div className='card-container'>
    {/* {console.log(product)} */}
    <img src={pic} alt='Food'></img>

</div>
  )
}
