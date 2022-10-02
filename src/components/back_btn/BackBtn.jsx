import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

const BackBtn = () => {
    const history = useNavigate()
    return (
        <div className='absolute ml-4 mt-4'>
            <button
                onClick={() => { history(-1) }}
                className='bg-black text-white text-lg lg:text-lg font-semibold flex gap-2 justify-center items-center py-2 px-3 rounded-sm'>
                <IoMdArrowRoundBack />
                <p className='hidden lg:block'>Go Back</p>
            </button>
        </div>
    )
}

export default BackBtn