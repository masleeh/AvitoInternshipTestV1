import React from 'react'
import { IAppState } from '../../redux/store'
import CommsItem from './CommsItem/CommsItem'
import LoadingSpinner from '../UI/LoadingSpinner'

interface IRootComsState {
    rootComsState:any,
    fetchNestedComments: Function
}

const RootCommsContainer:React.FC<IRootComsState> = ({rootComsState, fetchNestedComments}) => {

    const renderedRootComs = rootComsState.rootComs.map((rootCom: any) => {
        if (rootCom) {
            return <CommsItem 
                key={rootCom.id}
                by={rootCom.by} 
                id={rootCom.id} 
                kids={rootCom.kids} 
                text={rootCom.text} 
                time={rootCom.time}
                deleted={rootCom.deleted}
                fetchNestedComments={fetchNestedComments}
                rootComsState={rootComsState}
                layer={rootCom.layer}
                />
        }
    })

    return (
        <div className='comment'>
            {!rootComsState.loading ? renderedRootComs : <LoadingSpinner />}
        </div>
    )
}

export default RootCommsContainer