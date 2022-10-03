import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {Link, useParams} from 'react-router-dom'
import BackBtn from '../back_btn/BackBtn'
import FoodCard from '../food_card/FoodCard'

const FoodByCountry = () => {
  const [foodList, setFoodList] = useState([])
  const {country} = useParams()


  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
      setFoodList(data.data.meals)
    }
    getData()
  }, [])
  return (
    <div>
      <BackBtn />
      <div className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-4 py-12'>
      <div className=' text-2xl lg:text-4xl font-bold text-center pt-3 lg:pt-0'>
        <p>{country} Traditional food</p>
        <p className='text-lg font-semibold text-gray-700 pt-2'>Food found: {foodList.length}</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          foodList.map(el => <Link key={el.idMeal} to={`${el.idMeal}`}><FoodCard title={el.strMeal} img={el.strMealThumb}/></Link>)
        }
      </div>
    </div>
    </div>
  )
}

export default FoodByCountry