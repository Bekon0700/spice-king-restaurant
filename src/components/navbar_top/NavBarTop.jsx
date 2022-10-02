import React from 'react'

const NavBarTop = () => {
    const navData = [
        {
            id: 1,
            title: 'Home',
            link: '/menu'
        },
        {
            id: 2,
            title: 'Menu',
            link: '/menu'
        },
        {
            id: 3,
            title: 'Offers',
            link: '/offer'
        },
        {
            id: 4,
            title: 'Rewards',
            link: '/reward'
        },
    ]
  return (
    <div className="flex gap-4 text-2xl font-crimson-text font-bold">
        {
            navData.map(el => {
                return (
                    <a href={el.link} key={el.id} className="hover:border-b-2 hover:border-b-blue-900 hover:text-[#D62300]">{el.title}</a>
                )
            })
        }
    </div>
  )
}

export default NavBarTop