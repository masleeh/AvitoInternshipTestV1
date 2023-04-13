import {
    FETCH_LATEST_IDS_FAILURE,
    FETCH_LATEST_IDS_REQUEST,
    FETCH_LATEST_IDS_SUCCESS,
} from '../actions/latestNewsId'
import { IAction } from '../../types/actionType'

const initialState = {
    loading: false,
    latestNews: [],
    error: ''
}

export type ILatestNewsIds = typeof initialState

const reducer = (state: ILatestNewsIds = initialState, action: any) => {
    switch (action.type) {
        case FETCH_LATEST_IDS_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_LATEST_IDS_SUCCESS:
            return {
                ...state, loading: false, latestNews: action.payload, error: ''
            }
        case FETCH_LATEST_IDS_FAILURE:
            return {
                loading: false, latestNews: [], error: action.payload
            }
        default: return state
    }
}

export default reducer