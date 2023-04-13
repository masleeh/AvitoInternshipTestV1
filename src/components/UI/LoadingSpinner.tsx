import { Space, Spin } from 'antd'
import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='spinner-container'>
            <Space>
                <Spin size="large" />
            </Space>
        </div>
    )
}

export default LoadingSpinner