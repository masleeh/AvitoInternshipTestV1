import React from 'react'
import { IComment } from '../../../types/commentType'
import { Button } from 'antd';

const CommsItem:React.FC<IComment> = (props) => {
    return (
        <div className='comment-item' style={props.deleted == true ? {display: "none"} 
        : {
            display: 'block', 
            marginLeft: 20 * (props.layer! || 0),
            width: `calc(100% - ${20 * (props.layer! || 0)}px)`
            }}>
            <h3 className="comment-item-by">By: {props.by}</h3>
            <h4 dangerouslySetInnerHTML={{__html: props.text}}  className='comment-item-com'/>
            {(props.kids && !props.layer) && <Button type="link" onClick={() => props.fetchNestedComments!(props.rootComsState.rootComs, props.id)}>Show more</Button>}
        </div>
    )
}

export default CommsItem