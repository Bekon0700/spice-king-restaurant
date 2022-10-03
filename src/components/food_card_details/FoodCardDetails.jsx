import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackBtn from '../back_btn/BackBtn'

const FoodCardDetails = () => {
    const { mealId } = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            setMeal(data.data.meals)
        }
        getData()
    }, [])
    const ingredients = []

    if (meal[0]) {
        const food = meal[0]
        const ing = []
        const measurment = []
        for (const el in food) {
            // console.log(el)
            if (el.includes('strIngredient') && food[el] && food[el] != ' ') {
                ing.push(food[el])
            }
            if (el.includes('strMeasure') && food[el] && food[el] != ' ') {
                measurment.push(food[el])
            }
        }

        for (let i = 0; i < ing.length; i++) {
            const ob = {
                id: i,
                ingredientName: ing[i],
                measurment: measurment[i] ? measurment[i] : 'not found'
            }
            ingredients.push(ob)
        }
    }


    return (
        <div>
            <BackBtn />
            <div className=' py-12 font-crimson-text'>
                {
                    meal.map(el => {
                        return (
                            <div key={el.idMeal} className='flex flex-col gap-4'>
                                <p className='text-2xl lg:text-4xl font-bold text-center py-2 lg:py-3'>{el.strMeal}</p>
                                <img src={el.strMealThumb} alt="" className='rounded-md w-11/12 lg:w-1/2 mx-auto h-96 lg:h-[600px]' />
                                <div className='w-11/12 lg:w-1/2 mx-auto'>
                                    <p className='text-xl font-semibold py-4'><span className='font-bold'>{el.strMeal}</span>, {el.strArea} food and main item of this food is {el.strCategory}.</p>
                                    <div className='border-2 border-amber-900 p-4'>
                                        <p className='text-center text-2xl font-bold py-2'>Ingredients List</p>
                                        <div className='flex flex-col gap-3'>
                                            {ingredients.map(pl => <p key={pl.id} className='font-semibold text-xl'>{pl.ingredientName} - {pl.measurment}</p>)}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-5/6 mx-auto'>
                                    <div className='text-xl text-justify font-semibold py-3'>
                                        <p className='text-3xl text-center font-bold py-4'>Cooking Instructions</p>
                                        <p className='whitespace-pre-line'>{`${el.strInstructions}`}</p>
                                    </div>
                                    {
                                        el.strTags ? <p className='text-base font-semibold italic py-4'>Tags: {el.strTags}</p> : ''
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FoodCardDetails