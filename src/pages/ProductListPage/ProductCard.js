import React from 'react'
import SvgFavourite from '../../components/common/SvgFavourite'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, title, description, price, discoutnt, rating, brand, thumbnail, slug }) => {
    return (
        <div className='flex flex-col hover:scale-105 relative'>
            <Link to={`/product/${id}`}>
                <img
                    className="h-[320px] w-[280px] bg-cover bg-center border rounded cursor-pointer object-cover block"
                    src={thumbnail?.startsWith('http') ? thumbnail : `/${thumbnail}`}
                    alt={title}
                />

            </Link>

            <div className='flex justify-between items-center'>
                <div className='flex flex-col p-2'>
                    <p className='text-[16px] p-1'>{title}</p>
                    {description && <p className='text-[12px] p-1 text-gray-600'>{brand}</p>}
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
            <button className='absolute top-0 right-0 pt-2 pr-4 cursor-pointer'><SvgFavourite /></button>
        </div>
    )
}

export default ProductCard