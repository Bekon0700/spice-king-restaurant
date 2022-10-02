import React from 'react'
import FoodType from '../food_type/FoodType'
import { IoMdArrowRoundBack } from 'react-icons/io'

import {Outlet} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <div className='bg-amber-900 font-crimson-text text-3xl lg:text-4xl font-bold text-white text-center py-8'>
        <p>Find your desired food</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Menu