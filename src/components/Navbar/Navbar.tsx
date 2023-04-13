import React from 'react'
import {RedoOutlined} from '@ant-design/icons'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

interface INavbar {
    updateNews: Function,
    location: any,
    updateComs: Function
}


const Navbar:React.FC<INavbar> = (props) => {
    return (
        <div className='container'>
            <nav className='navbar'>
                    <NavLink to="/" >
                        <h2 className='navbar-logo'>HACKER NEWS</h2>
                    </NavLink> 
                    <Button 
                    type="primary" 
                    shape="circle" 
                    onClick={props.location.pathname == "/" ? () => props.updateNews() : () => props.updateComs()}>
                        <RedoOutlined />
                    </Button>
            </nav>
        </div>
    )
}

export default Navbar