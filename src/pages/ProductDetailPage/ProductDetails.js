import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import content from '../../data/content.json'
import Rating from '../../components/Rating/Rating';
import SizeFliter from '../../components/Filters/SizeFilter';

const categories = content?.categories;

const ProductDetails = () => {

    const { product } = useLoaderData();
    // const[image,setImage] = useState(product?.images[0].startsWith('http') ? product?.images[0]: product?.thumbnail);
    const [image, setImage] = useState(product?.images[0] ?? product?.thumbnail);
    const [BreadcrumbLinks, setBreadcrumbLinks] = useState([]);

    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id)
    }, product)

    useEffect(() => {
        setBreadcrumbLinks([]);
        const arrayLinks = [{ title: 'Shop', path: '/' }, {
            title: productCategory?.name,
            path: productCategory.path
        }];
        const productType = productCategory?.types?.find((item) => item?.type_id === product?.type_id)
        if (productType) {
            arrayLinks?.push({
                title: productType?.name,
                path: productType?.name
            })
        }
        setBreadcrumbLinks([...BreadcrumbLinks, ...arrayLinks]);
    }, [productCategory, product])

    return (
        <div className='flex flex-col md:flex-row p-10'>
            <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
                {/* image */}
                <div className='flex flex-col md:flex-row w-[80%]'>
                    <div className='w-[100%] md:w-[20%] justify-center h-[40px] md:h-[320px]'>
                        {/* stack image */}
                        <div className='flex flex-row md:flex-col justify-center h-full'>
                            {
                                //for http photo links
                                // product?.images[0].startsWith('http') && product?.images?.map((item, index)=>(
                                //     <button onClick={()=>setImage(item)} className=' rounded-lg w-fit p-2 mb-2'><img src={`/${item}`} className='h-[60px] w-[60px] bg-cover bg-center hover:scale-105' alt={'sample-'+index}/></button>
                                // ))

                                product?.images?.map((item, index) => (
                                    <button onClick={() => setImage(item)} className=' rounded-lg w-fit p-2 mb-2'><img src={`/${item}`} className='h-[60px] w-[60px] bg-cover bg-center hover:scale-105' alt={'sample-' + index} /></button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-[80%] flex justify-center md:pt-0 pt-10'>
                        <img className={'h-full w-full max-h[520px] bg-cover bg-center border rounded cursor-pointer object-cover'} src={`/${image}`} alt={product?.title} />
                    </div>
                </div>
            </div>

            <div className='w-[60%] px-10'>
                {/* product description */}
                <Breadcrumb links={BreadcrumbLinks} />
                <p className='text-3xl pt-2'>{product?.title}</p>
                <Rating rating={product?.rating} />

                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <p className='text-sm bold'>Select Size</p>
                        <Link className='text-sm text-gray-500 hover:text-gray-900' to={'https://en.wikipedia.org/wiki/Clothing_sizes'} target='_blank'>{'Size Guide ->'}</Link>
                    </div>
                </div>
                <div className='mt-2'><SizeFliter sizes={product?.size} hideTitle /></div>
            </div>

        </div>
    )
}

export default ProductDetails