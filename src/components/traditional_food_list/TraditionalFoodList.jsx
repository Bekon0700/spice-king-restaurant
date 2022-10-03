import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import BackBtn from '../back_btn/BackBtn'

const TraditionalFoodList = () => {
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        const getCountryList = async () => {
            const list = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            setCountryList(list.data.meals)
        }
        getCountryList()
    }, [])
    return (
        <div>
            <BackBtn />
            <div className='w-4/5 mx-auto py-8'>
                <div className='text-2xl font-semibold text-center text-red-900 pb-4 pt-5 lg:pt-0'>
                    <p>Find traditional food by country name</p>
                </div>
                <div className='flex flex-col gap-2 font-crimson-text text-2xl font-semibold text-black'>
                    {
                        countryList.map(el => <Link key={el.strArea} to={`/menu/traditional-food/${el.strArea}`} className='border border-black px-4 py-2'>{el.strArea}</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default TraditionalFoodList