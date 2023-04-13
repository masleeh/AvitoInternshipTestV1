import {
    SET_ITEM_ID,
    FETCH_SINGLE_NEWS_REQUEST,
    FETCH_SINGLE_NEWS_SUCCESS,
    FETCH_SINGLE_NEWS_FAILURE
} from '../actions/singleNewsAction'

const initialState = {
    loading: false,
    singleNews: {},
    error: "",
    newsId: 0
}

export type ISingleNews = typeof initialState

const reducer = (state: ISingleNews = initialState, action: any) => {
    switch (action.type) {
        case FETCH_SINGLE_NEWS_REQUEST:
            return {
                ...state, loading: true, singleNews: {}
            }
        case FETCH_SINGLE_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                singleNews: action.payload,
                error: ""
            }
        case FETCH_SINGLE_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                singleNews: {},
                error: action.payload
            }
        case SET_ITEM_ID:
            return {
                ...state,
                newsId: action.payload
            }
        default: return state
    }
}

export default reducer
