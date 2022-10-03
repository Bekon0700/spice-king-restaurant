import React from 'react'

import { BiError } from 'react-icons/bi'

const NotFount = () => {
    return (
        <div className=' border-t-2 border-blue-900'>
            <div className='w-11/12 mx-auto h-screen text-center text-xl lg:text-2xl font-bold text-red-900 flex flex-col justify-center items-center'>
                <BiError className='text-8xl' />
                <p>We believe something went wrong</p>
                <p className='py-4 text-black text-sm'>Please browse our menu while we fix the issue</p>
            </div>
        </div>
    )
}

export default NotFount