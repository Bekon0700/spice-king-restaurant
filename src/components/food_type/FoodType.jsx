import React from 'react'
import {Link} from 'react-router-dom'

const FoodType = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 py-12 w-5/6 mx-auto'>
            <Link to='/menu/traditional-food'>
                <div className=" w-full h-96 bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center"
                    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('./img/traditional-food.png')" }}
                >
                    <p className='text-4xl italic font-bold text-white '>Prepare traditional food</p>
                </div>
            </Link>
            <Link to='/menu/specific-food'>
                <div className=" w-full h-96 bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center"
                    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('./img/burger.jpg')" }}
                >
                    <p className='text-4xl italic font-bold text-white '>Prepare specific item food</p>
                </div>
            </Link>
        </div>
    )
}

export default FoodType