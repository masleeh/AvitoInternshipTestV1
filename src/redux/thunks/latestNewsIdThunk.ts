import {
    fetchLatestIdsRequest,
    fetchLatestIdsSuccess,
    fetchLatestIdsFailure
} from '../actions/latestNewsId'
import { fetchLatestIds } from '../../helpers/APIRequests/fetchLatestIds'
import { fetchSingleNew } from '../../helpers/APIRequests/fetchSingleNews'

export const fetchLatestNewsIds = () => {
    return async (dispatch: any) => {
        dispatch(fetchLatestIdsRequest())
        try {
            const response = await fetchLatestIds()
            const slicedNews = response.data.slice(0, 100)
            const filledNews = []
            for (let i = 0; i < slicedNews.length; i++) {
                try {
                    const fetchedItem = await fetchSingleNew(slicedNews[i])
                    filledNews.push(fetchedItem.data)
                } catch (error: any) {
                    filledNews.push({
                        by: "",
                        descendants: 0,
                        id: 0,
                        kids: [],
                        score: 0,
                        time: 0,
                        title: '',
                        type: '',
                        url: ''
                    })
                }
            }
            dispatch(fetchLatestIdsSuccess(filledNews))
        } catch (error: any) {
            dispatch(fetchLatestIdsFailure(error.message))
        }

    }
}