import {
    fetchSingleNewsFailure,
    fetchSingleNewsRequest,
    fetchSingleNewsSuccess
} from '../actions/singleNewsAction'
import { fetchSingleNew } from '../../helpers/APIRequests/fetchSingleNews'

export const fetchSingleNewsItem = (id: number) => {
    return async (dispatch: any) => {
        dispatch(fetchSingleNewsRequest())
        try {
            const response = await fetchSingleNew(id)
            dispatch(fetchSingleNewsSuccess(response.data)) 
        } catch (error: any) {
            dispatch(fetchSingleNewsFailure(error.message))
        }
    }
}