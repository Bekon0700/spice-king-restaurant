import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'
import BackBtn from '../back_btn/BackBtn'


const SpecificFoodList = () => {
  const [itemList, setItemList] = useState([])
    useEffect(() => {
        const getItemList = async () => {
            const list = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            setItemList(list.data.meals)
        }
        getItemList()
    }, [])
    return (
        <div>
            <BackBtn />
            <div className='w-4/5 mx-auto py-8'>
                <div className='text-2xl font-semibold text-center text-red-900 pb-4'>
                    <p>Find specific food by item name</p>
                </div>
                <div className='flex flex-col gap-2 font-crimson-text text-2xl font-semibold text-black'>
                    {
                        itemList.map(el => <Link key={el.strCategory} className='border border-black px-4 py-2'>{el.strCategory}</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SpecificFoodList