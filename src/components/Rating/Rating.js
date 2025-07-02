import React, { useMemo } from 'react'
import SvgStarIcon from '../common/SvgStarIcon';

const Rating = ({rating}) => {

    const ratingNumber = useMemo(()=>{
        return Array(Math.floor(Number(rating))).fill()
    },[rating]);

  return (
    <div className='flex items-center'>
        {ratingNumber?.map((_,index)=>(
            <SvgStarIcon key={index}/>
        ))}
    </div>
  )
}

export default Rating