import {
    FETCH_ROOT_COMMENTS_FAILED,
    FETCH_ROOT_COMMENTS_REQUEST,
    FETCH_ROOT_COMMENTS_SUCCESS
} from '../actions/rootCommentsAction'


const initialState = {
    loading: false,
    error: '',
    rootComs: []
}

export type IRootComments = typeof initialState

const reducer = (state: IRootComments = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ROOT_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_ROOT_COMMENTS_SUCCESS:
            return {
                loading: false,
                error: '',
                rootComs: action.payload
            }
        case FETCH_ROOT_COMMENTS_FAILED:
            return {
                loading: false,
                error: action.payload,
                rootComs: []
            }
        default: return state
    }
}

export default reducer