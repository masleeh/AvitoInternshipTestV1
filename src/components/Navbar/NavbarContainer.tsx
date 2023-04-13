import React from 'react'
import Navbar from './Navbar'
import { useAppDispatch } from '../../helpers/reduxHooks'
import { updateNewsThunk } from '../../redux/thunks/updateNewsThunk'
import { useSelector } from 'react-redux'
import { IAppState } from '../../redux/store'
import { useLocation } from 'react-router-dom'
import { fetchRootComs } from '../../redux/thunks/rootComsThunk'

const NavbarContainer = () => {
    const dispatch = useAppDispatch()
    const state = useSelector((state: IAppState) => state.latestNews)
    const comState = useSelector((state: IAppState) => state.singleNews)
    const location = useLocation()

    const updateNews = () => {
        dispatch(updateNewsThunk(state.latestNews))
    }

    const updateComs = () => {
        dispatch(fetchRootComs(comState.singleNews.kids))
    }

    return (
        <Navbar 
        location={location}
        updateNews={updateNews}
        updateComs={updateComs}
        />
    )
}

export default NavbarContainer