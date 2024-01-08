import React from 'react'
import { Button , Menu , Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import icon from '../Images/633px-Cryptocurrency_Logo.png'
import { HolderOutlined , MoneyCollectOutlined , BoldOutlined , FundOutlined , MenuFoldOutlined } from '@ant-design/icons'

export const Navbar = () => {
  return (
    <div className='nav-container '>
        <div className='logo-container '>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                    <Link to="/" >Crytoverse</Link>
            </Typography.Title>
          
                

        </div>   
 </div>
  )
}
export default Navbar
