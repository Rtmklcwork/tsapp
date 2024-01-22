import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white]'>
            <h3 className='font-bold'>GitHub search</h3>

            <span>
                <Link className='mr-20' to='/'>Home</Link>
                <Link to='/fav'>Favorites</Link>
            </span>
        </nav>
    )
}

export default Navigation
