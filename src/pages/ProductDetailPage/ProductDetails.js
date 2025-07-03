
import { useEffect, useMemo, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { CartIcon } from '../../components/common/CartIcon';
import SvgCloth from '../../components/common/SvgCloth';
import SvgCreditCard from '../../components/common/SvgCreditCard';
import SvgReturn from '../../components/common/SvgReturn';
import SvgShipping from '../../components/common/SvgShipping';
import SizeFliter from '../../components/Filters/SizeFilter';
import Rating from '../../components/Rating/Rating';
import SeactionHeading from '../../components/Section/SectionHeading/SeactionHeading';
import content from '../../data/content.json';
import ProductColors from './ProductColors';
import ProductCard from '../ProductListPage/ProductCard';

const categories = content?.categories;

const extraSection = [
    {
        icon: <SvgCreditCard />,
        label: 'Secure payment'
    },
    {
        icon: <SvgCloth />,
        label: 'Size & Fit'
    },
    {
        icon: <SvgShipping />,
        label: 'Free shipping'
    },
    {
        icon: <SvgReturn />,
        label: 'Free Shipping & Returns'
    }
]

const ProductDetails = () => {

    const { product } = useLoaderData();
    // const[image,setImage] = useState(product?.images[0].startsWith('http') ? product?.images[0]: product?.thumbnail);
    const [image, setImage] = useState();
    const [BreadcrumbLinks, setBreadcrumbLinks] = useState([]);

    const similarProducts = useMemo(() => {
        return content?.products?.filter((item) => (item?.type_id === product?.type_id && item?.id !== product?.id))
    }, [product]);

    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id)
    }, [product]);

    useEffect(() => {
        setImage(product?.images[0] ?? product?.thumbnail)
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
        <>
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

                    {/* price tag */}
                    <p className='text-xl bold py-2'>${product?.price}</p>

                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <p className='text-sm bold'>Select Size</p>
                            <Link className='text-sm text-gray-500 hover:text-gray-900' to={'https://en.wikipedia.org/wiki/Clothing_sizes'} target='_blank'>{'Size Guide ->'}</Link>
                        </div>
                    </div>
                    <div className='mt-2'><SizeFliter sizes={product?.size} hideTitle /></div>
                    <div>
                        <p className='text-lg bold'>Colors Available</p>
                        <ProductColors colors={product?.color} />
                    </div>
                    <div className='flex pt-4'>
                        <button className='bg-black rounded-lg hover:bg-gray-700'>
                            <div className='flex h-[42px] rounded-lg w-[150px] px-2 items-center justify-center bg-black text-white hover:bg-gray-700'><CartIcon bgColor="transparent" />
                                Add to cart
                            </div>
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-4 pt-4'>
                        {
                            extraSection?.map((section) => (
                                <div className='flex items-center'>
                                    {section?.icon}
                                    <p className='px-2'>{section?.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            {/* product details */}
            <SeactionHeading title={'Product Details'} />
            <div className='md:w-[50%] w-full p-2'>
                <p className='px-8'>{product?.description}</p>
            </div>

            <SeactionHeading title={'Similar Products'} />
            <div className='flex px-4'>
                
                <div className='pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 px-2'>
                    {similarProducts?.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                    {!similarProducts?.length && <p className='px-4'>No Products Found</p>}
                </div>
            </div>
        </>
    )
}

export default ProductDetails