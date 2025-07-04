import React from 'react'
import ArrowIcon from '../common/ArrowIcon'

const Card = ({ imagePath, title, description, actionArrow, height, width }) => {
  return (
    <div className='flex flex-col p-8'>

      <img
        style={{
          height: height || '280px',
          maxHeight: height || '280px',
          width: width || '200px',
          maxWidth: width || '220px'
        }}
        className={'bg-cover bg-center border rounded hover:scale-105 cursor-pointer'}
        src={imagePath}
        alt="Jeans" />

      <div className='flex justify-between items-center'>
        <div className='flex flex-col p-2'>
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] p-1 text-gray-600'>{description}</p>}
        </div>
        {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span>}
      </div>
    </div>
  )
}

export default Card