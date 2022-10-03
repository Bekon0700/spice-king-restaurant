import React from 'react'

const FoodCard = ({ title, img }) => {
    return (
        <div>
            <div className="rounded-lg bg-white font-crimson-text text-xl lg:text-2xl font-bold text-amber-900 grid grid-cols-1 h-96">
                <img src={img} alt={title} className="h-72 rounded-t-lg w-full" />
                <div className='flex justify-center items-center h-fit'>
                    <p className="text-center ">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCard