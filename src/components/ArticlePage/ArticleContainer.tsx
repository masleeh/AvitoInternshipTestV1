import React, {useState, useEffect} from 'react'
import ArticleItem from './ArticleItem/ArticleItem'
import { useAppDispatch } from '../../helpers/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { IAppState } from '../../redux/store'
import { fetchSingleNewsItem } from '../../redux/thunks/singleNewsThunk'
import { fetchRootComs } from '../../redux/thunks/rootComsThunk'
import LoadingSpinner from '../UI/LoadingSpinner'
import RootCommsContainer from './RootCommsContainer'
import { getNestedComs } from '../../redux/thunks/nestedComsThunk'

const ArticleContainer = () => {
    const state = useSelector((state: IAppState) => state.singleNews)
    const rootComsState = useSelector((state: IAppState) => state.rootComs)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const fetchNewsItem = async () => {
        dispatch(fetchSingleNewsItem(state.newsId))
    }

    const fetchRootComments = async () => {
        if (state.singleNews.kids) {
            dispatch(fetchRootComs(state.singleNews.kids))
        } else {
            dispatch(fetchRootComs())
        }
    }

    const fetchNestedComments = async (rootComs: any, comId: number) => {
        dispatch(getNestedComs(rootComs, comId))
    }


    
    useEffect(() => {
        if (state.newsId == 0) return navigate('/')
        else {
            fetchNewsItem()
        }
    }, [])
    
    useEffect(() => {
        fetchRootComments()
    }, [state.singleNews])

    return (
        <>
        {(!state.loading || !rootComsState.loading) ? 
        <>
        <ArticleItem 
        title={state.singleNews.title}
        time={new Date(state.singleNews.time * 1000).toDateString()}
        by={state.singleNews.by}
        url={state.singleNews.url}
        kids={state.singleNews.kids}
        descendants={state.singleNews.descendants}
        />

        
        <RootCommsContainer 
        rootComsState={rootComsState}
        fetchNestedComments={fetchNestedComments}
        />

        </>
        : <LoadingSpinner />
        }
        </>
    )
}

export default ArticleContainer