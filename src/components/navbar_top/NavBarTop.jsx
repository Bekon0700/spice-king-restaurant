import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { GiHamburger } from "react-icons/gi";
import './style.css'

const NavBarTop = () => {
    const navData = [
        {
            id: 1,
            title: 'Home',
            link: 'home'
        },
        {
            id: 2,
            title: 'Menu',
            link: 'menu'
        },
        {
            id: 3,
            title: 'Offers',
            link: 'offer'
        },
        {
            id: 4,
            title: 'Rewards',
            link: 'reward'
        },
    ]
    return (
        <div className="w-11/12 mx-auto py-3">
            <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                <div className="hidden lg:block">
                    <nav className="flex gap-4 text-2xl font-crimson-text font-bold">
                        {
                            navData.map(el => {
                                return (
                                    <NavLink 
                                        key={el.id} 
                                        to={el.link}
                                    >{el.title}</NavLink>
                                )
                            })
                        }
                    </nav>
                </div>
                <GiHamburger className="text-5xl lg:text-6xl text-red-900" />
                <div className="flex gap-2 text-2xl lg:text-2xl font-crimson-text font-bold text-amber-900">
                    <p>Spice King Online Restautant</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarTop