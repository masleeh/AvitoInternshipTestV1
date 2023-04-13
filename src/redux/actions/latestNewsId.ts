export const FETCH_LATEST_IDS_REQUEST = 'FETCH_LATEST_IDS_REQUEST'
export const FETCH_LATEST_IDS_SUCCESS = 'FETCH_LATEST_IDS_SUCCESS'
export const FETCH_LATEST_IDS_FAILURE = 'FETCH_LATEST_IDS_FAILURE'

export const fetchLatestIdsRequest = () => {
    return {
        type: FETCH_LATEST_IDS_REQUEST
    }
}

export const fetchLatestIdsSuccess = (data: any) => {
    return {
        type: FETCH_LATEST_IDS_SUCCESS,
        payload: data
    }
}

export const fetchLatestIdsFailure = (error: any) => {
    return {
        type: FETCH_LATEST_IDS_FAILURE,
        payload: error
    }
}