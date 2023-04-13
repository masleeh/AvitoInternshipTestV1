import {
    fetchRootComsFailed,
    fetchRootComsRequest,
    fetchRootComsSuccess
} from '../actions/rootCommentsAction'
import { fetchSingleNew } from '../../helpers/APIRequests/fetchSingleNews'

export const fetchRootComs = (comsArray?: number[]) => {
    return async (dispatch: any) => {
        dispatch(fetchRootComsRequest())
        if (!comsArray) {
            return dispatch(fetchRootComsSuccess([]))
        }
        try {
            let readyArray = []
            for (let i = 0; i < comsArray.length; i++) {
                try {
                    const response = await fetchSingleNew(comsArray[i])
                    readyArray.push(response.data)
                } catch (error) {
                    readyArray.push({
                        by: "",
                        id: 0,
                        kids: [],
                        parent: 0,
                        text: "",
                        time: 0,
                        type: "comment"
                    })
                }
            }
            dispatch(fetchRootComsSuccess(readyArray))
        } catch (error: any) {
            dispatch(fetchRootComsFailed(error.message))
        }
    }
}