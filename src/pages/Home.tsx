import React, { useEffect, useState } from 'react'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/Github.api'

import { useDebounce } from '../hooks/Debounce'
import ReposCard from '../components/ReposCard'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [search, setSearch] = useState('')
    const [drop, setDrop] = useState(false)
    const debounced = useDebounce(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })
    const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDrop(debounced.length > 3 && data?.length! > 0)
    }, [debounced])
    const clickUser = (username: string) => {
        fetchRepos(username)
        setDrop(!drop)
    }
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-creen">
            {isError && <p className='text-center text-red-600'>ERROR</p>}
            <div className="relative w-[560px]">
                <input
                    className='border py-2 px-4 w-full h-[42px] mb-2'
                    type="text"
                    placeholder='search UserName'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {drop && <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
                    {isLoading && <p className='text-center'>Loading...</p>}
                    {data?.map(user => (
                        <li
                            key={user.id}
                            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
                            onClick={() => clickUser(user.login)}
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>}
                <div className="container">
                    {areReposLoading && <p className='text-center'>Repos are loading...</p>}
                    {repos?.map(repo => (
                        <NavLink to={repo.html_url} target='_blank'> <ReposCard repo={repo} key={repo.id} /></NavLink>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Home
