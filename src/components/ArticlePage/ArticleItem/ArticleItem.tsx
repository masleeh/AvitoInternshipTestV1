import React from 'react'
import { ISingleNews } from '../../../types/newsItem'

const ArticleItem:React.FC<ISingleNews> = (props) => {
    return (
        <div className='article'>
            <h1 className="article-title">{props.title}</h1>
            <a href={props.url} target='_blank' className="article-url">{props.url}</a>
            <div className='article-row'>
                <h4 className="article-author">Author: {props.by}</h4>
                <h4 className="article-date">Posted: {props.time}</h4>
                <h3 className="article-com-count">Comments: {props.descendants}</h3>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ArticleItem