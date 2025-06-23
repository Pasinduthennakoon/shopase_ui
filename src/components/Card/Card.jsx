import React from 'react'

const Card = ({imagePath, title, description, actionArrow, height, width}) => {
  return (
    <div className='flex flex-col p-8'>
        <img className={`h-[${height? height:'220px'}] max-h-[${height? height:'260px'}] w-[${width? width:'200px'}] max-w-[${width? width:'220px'}] bg-cover bg-center border rounded hover:scale-105 cursor-pointer`} src={imagePath} alt="Jeans" />
        <div className='flex justify-between'>
            <div className='flex flex-col p-2'>
                <p className='text-[16px] p-1'>{title}</p>
                {description && <p className='text-[12px] p-1 text-gray-600'>{description}</p>}
            </div>
            {actionArrow && <div></div>}
        </div>
    </div>
  )
}

export default Card