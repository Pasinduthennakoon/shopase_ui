import React from 'react'
import Navigation from '../components/Navigations/Navigation'
import { Outlet } from 'react-router-dom'

const ShopApplicationWrapper = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default ShopApplicationWrapper