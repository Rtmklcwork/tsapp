import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/Redux'
import { NavLink } from 'react-router-dom'
import { useActions } from '../hooks/Actions'
import { IRepos } from '../models/models'

const Favorite = () => {
    const { favourites } = useAppSelector(state => state.github)
    const { removeFav } = useActions()


    if (favourites.length === 0) return <p className='text-center'>No repos</p>

    return (
        <ul className='list-none'>
            {favourites.map(f => (
                <div className='max-w-sm border px-5 py-2 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all   my-5 relative'>
                    <li key={f}  >
                        <NavLink to={f}>{f}</NavLink>
                        <button className='px-1 py-0 bg-yellow-500  rounded w-10 absolute right-1  hover:shadow-md hover:bg-red-500'
                            onClick={() => removeFav(f)}>
                            X
                        </button>
                    </li>
                </div>

            ))
            }
        </ul >
    )
}

export default Favorite
