import React from 'react'
import SeactionHeading from './SectionHeading/SeactionHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirt from '../../assets/img/tshirts.jpeg'
import dresses from '../../assets/img/dresses.jpg'
import Carousel from 'react-multi-carousel'
import responsive from '../../utils/Section.consonent'
import './NewArrivals.css'

const items = [
  {
    'title' : 'Jeans',
    imagePath : Jeans
  },{
    'title' : 'Shirts',
    imagePath : Shirts
  },{
    'title' : 'T-Shirts',
    imagePath :  Tshirt
  },{
    'title' : 'Dresses',
    imagePath : dresses
  },{
    'title' : 'Kurtis',
    imagePath : require('../../assets/img/kurtis.jpg')
  },{
    'title' : 'Joggers',
    imagePath : require('../../assets/img/joggers.jpg')
  }
]

const NewArrivals = () => {
  return (
    <>
    <SeactionHeading title ={'New Arrivals'}/>
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={false}
      showDots={false}
      infinite={false}
      partialVisbile={false}
      itemClass={'react-slider-custom-items'}
      className='px-8'
    >
      {items && items?.map((item,index)=> <Card key={item?.title + index} title={item.title} imagePath={item.imagePath}/>)}
    </Carousel>
    </>
  )
}

export default NewArrivals