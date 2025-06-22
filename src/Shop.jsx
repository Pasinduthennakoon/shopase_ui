import React from 'react'
import Navigation from './components/Navigations/Navigation'
import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Section/NewArrivals'

export const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
    </>
  )
}

export default Shop;

