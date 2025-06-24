import React from 'react'
import Navigation from './components/Navigations/Navigation'
import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Section/NewArrivals'
import Category from './components/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title+index} {...item}/>)}
      <Footer content={content?.footer}/>
    </>
  )
}

export default Shop;

