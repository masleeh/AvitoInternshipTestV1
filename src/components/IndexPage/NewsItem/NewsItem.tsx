import React from 'react'
import { INewsItem, INewsItemData } from '../../../types/newsItem'
import { Card } from 'antd'

const NewsItem:React.FC<INewsItemData> = (props) => {
    return (
        <Card 
            title={props.title} 
            bordered={true} 
            style={{ width: "100%", marginTop: 20, cursor: "pointer" }}
            onClick={() => props.navigate(props.id)}
            >
            <div className='news-item-row'>
                <h3>Author: {props.by}</h3>
                <h3>Rating: {props.score}</h3>
                <h3>Date: {props.time}</h3>
            </div>
        </Card>
    )
}

export default NewsItem