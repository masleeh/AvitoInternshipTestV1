export const FETCH_SINGLE_NEWS_REQUEST = 'FETCH_SINGLE_NEWS_REQUEST'
export const FETCH_SINGLE_NEWS_SUCCESS = 'FETCH_SINGLE_NEWS_SUCCESS'
export const FETCH_SINGLE_NEWS_FAILURE = 'FETCH_SINGLE_NEWS_FAILURE'
export const SET_ITEM_ID = 'SET_ITEM_ID'

export const fetchSingleNewsRequest = () => {
    return {
        type: FETCH_SINGLE_NEWS_REQUEST
    }
}

export const fetchSingleNewsSuccess = (data: any) => {
    return {
        type: FETCH_SINGLE_NEWS_SUCCESS,
        payload: data
    }
}

export const fetchSingleNewsFailure = (error: any) => {
    return {
        type: FETCH_SINGLE_NEWS_SUCCESS,
        payload: error
    }
}


export const setItemId = (id: any) => {
    return {
        type: SET_ITEM_ID,
        payload: id
    }
}