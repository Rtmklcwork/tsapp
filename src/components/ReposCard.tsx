import React from 'react'
import { IRepos } from '../models/models'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/Actions'

const ReposCard = ({ repo }: { repo: IRepos }) => {
    const { addFav } = useActions()
    const addFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFav(repo.html_url)
    }
    return (
        <div className='border px-5 py-2 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <h2 className='text-lg font-bold'>{repo.full_name}</h2>
            <p className='text-sm cursor-pointer  mr-2 relative'>
                Updated at: <span>{repo.updated_at}</span>
                Watchers: <span >{repo.watchers}</span>
                <button
                    className='bg-yellow-500 px-2 py-1 rounded absolute bottom-2 right-1 hover:shadow-md '
                    onClick={addFavourite}>
                    Add
                </button>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>



        </div>
    )
}

export default ReposCard
