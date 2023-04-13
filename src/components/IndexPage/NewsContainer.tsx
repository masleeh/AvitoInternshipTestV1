import React, {useEffect} from 'react'
import { useSelector} from 'react-redux'
import { IAppState } from '../../redux/store'
import {fetchLatestNewsIds} from '../../redux/thunks/latestNewsIdThunk'
import { useAppDispatch } from '../../helpers/reduxHooks'
import { INewsItem } from '../../types/newsItem'
import NewsItem from './NewsItem/NewsItem'
import LoadingSpinner from '../UI/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { fetchSingleNewsSuccess, setItemId } from '../../redux/actions/singleNewsAction'
import { updateNewsThunk } from '../../redux/thunks/updateNewsThunk'


const NewsContainer = () => {
    const dispatch = useAppDispatch()
    const state = useSelector((state: IAppState) => state.latestNews)
    const navigate = useNavigate()
    
    const news = state.latestNews

    const getLatestNews = () => {
        if (state.latestNews.length > 0) {
            dispatch(updateNewsThunk(state.latestNews))
        } else {
            dispatch(fetchLatestNewsIds())
        }
    }

    useEffect(() => {
        dispatch(fetchSingleNewsSuccess({}))
        getLatestNews()
    }, [])

    const pushToNewsArticle = (id: number) => {
        if (news.length < 1 || !id || id === 0) return
        dispatch(setItemId(id))
        navigate('/article')
    }

    const renderedNews = news.map((newsItem: INewsItem) => {
        const normalData = new Date(newsItem.time * 1000).toDateString()

        return (
            <NewsItem 
            key={newsItem.id}
            id={newsItem.id}
            descendants={newsItem.descendants}
            by={newsItem.by}
            kids={newsItem.kids}
            score={newsItem.score}
            time={normalData}
            type={newsItem.type}
            url={newsItem.url}
            title={newsItem.title}
            navigate={pushToNewsArticle}
            />
        )
    })

    return (
        <>
            {state.loading ?  
            <LoadingSpinner />
            : renderedNews}
        </>
    )
}

export default NewsContainer