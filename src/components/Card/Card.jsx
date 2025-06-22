import React from 'react'
import Jeans from '../../assets/img/jeans.jpg'
const Card = () => {
  return (
    <div className='flex items-center flex-col'>
        <img src={Jeans} height={"320px"} width={"420px"} alt="Jeans" />
    </div>
  )
}

export default Card