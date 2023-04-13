export const FETCH_ROOT_COMMENTS_REQUEST = 'FETCH_ROOT_COMMENTS_REQUEST'
export const FETCH_ROOT_COMMENTS_SUCCESS = 'FETCH_ROOT_COMMENTS_SUCCESS'
export const FETCH_ROOT_COMMENTS_FAILED = 'FETCH_ROOT_COMMENTS_FAILED'


export const fetchRootComsRequest = () => {
    return {
        type: FETCH_ROOT_COMMENTS_REQUEST
    }
}

export const fetchRootComsSuccess = (data: any) => {
    return {
        type: FETCH_ROOT_COMMENTS_SUCCESS,
        payload: data
    }
}

export const fetchRootComsFailed = (error: any) => {
    return {
        type: FETCH_ROOT_COMMENTS_FAILED,
        payload: error
    }
}