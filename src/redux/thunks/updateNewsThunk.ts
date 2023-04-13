import {
    fetchLatestIdsRequest,
    fetchLatestIdsSuccess,
    fetchLatestIdsFailure
} from '../actions/latestNewsId'
import { fetchLatestIds } from '../../helpers/APIRequests/fetchLatestIds'
import { fetchSingleNew } from '../../helpers/APIRequests/fetchSingleNews'
import { fetchLatestNewsIds } from './latestNewsIdThunk'

export const updateNewsThunk = (prevNewsState: any) => {
    return async (dispatch: any) => {
        dispatch(fetchLatestIdsRequest())
        try {
            const response = await fetchLatestIds()
            let i = 0
            while (response.data[i] !== prevNewsState[0].id && i < 100) {
                i++
            }
            if (i === 0) {
                dispatch(fetchLatestIdsSuccess(prevNewsState))
            }
            if (i > 98) {
                return dispatch(fetchLatestNewsIds())
            }
            else {
                const updateArray = []
                for (let n = 0; n < i; n++) {
                    try {
                        const fetchedItem = await fetchSingleNew(response.data[n])
                        updateArray.push(fetchedItem.data)
                    } catch (error) {
                        updateArray.push({
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
                dispatch(fetchLatestIdsSuccess(updateArray.concat(prevNewsState).slice(0, 100)))
            }
        } catch (error: any) {
            dispatch(fetchLatestIdsFailure(error.message))
        }
    }
}