import {
    fetchRootComsFailed,
    fetchRootComsRequest,
    fetchRootComsSuccess
} from '../actions/rootCommentsAction'
import { fetchSingleNew } from '../../helpers/APIRequests/fetchSingleNews'

export const getNestedComs = (rootComs: any, comId: number) => {
    return async (dispatch:any) => {
        const id = rootComs.findIndex((item: any) => {
            return item.id === comId
        }) 
        const sliceComs = rootComs.slice(0, id + 1)
        const nextComs = rootComs.slice(id + 1)

        let layer = 1

        const nestComment = async (kidsArray: any) => {
            for (let i = 0; i < kidsArray.length; i++) {
                try {
                    const response = await fetchSingleNew(kidsArray[i])
                    const newCom = response.data
                    sliceComs.push({...newCom, layer: layer})

                    if (newCom.kids) {
                        layer += 1
                        await nestComment(newCom.kids)
                    }

                } catch (error: any) {
                    console.log(error.message)
                }
            }
        }

        dispatch(fetchRootComsRequest())
        try {
            await nestComment(sliceComs[id].kids)
            dispatch(fetchRootComsSuccess(sliceComs.concat(nextComs)))
        } catch (error: any) {
            dispatch(fetchRootComsFailed(error.message))
        }
    }
}