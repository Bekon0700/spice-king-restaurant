import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdFastfood } from 'react-icons/md'
import { FaCoins, FaWineBottle } from 'react-icons/fa'

import {NavLink} from 'react-router-dom'

const NavBarBottom = () => {
    const navData = [
        {
            id: 1,
            title: 'Home',
            link: 'home',
            icon: <AiFillHome />
        },
        {
            id: 2,
            title: 'Menu',
            link: 'menu',
            icon: <MdFastfood />
        },
        {
            id: 3,
            title: 'Offers',
            link: 'offer',
            icon: <FaCoins />
        },
        {
            id: 4,
            title: 'Rewards',
            link: 'reward',
            icon: <FaWineBottle />
        },
    ]
    return (
        <div className='fixed bottom-0 left-0 w-full lg:hidden'>
            <div className='bg-[#EFE1CC] border-t border-t-gray-600 py-2'>
                <div className="w-4/5 mx-auto flex justify-between gap-4 text-xl font-crimson-text font-bold text-gray-800">
                    {
                        navData.map(el => {
                            return (
                                <div key={el.id} className='flex flex-col items-center gap-1 hover:text-[#D62300]'>
                                    {el.icon}
                                    <NavLink to={el.link} >{el.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBarBottom