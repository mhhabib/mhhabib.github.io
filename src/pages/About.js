import React, { useState } from "react";
import { MenuItem, Menu } from 'semantic-ui-react'

const About=()=>{
    const [menuItem, setMenuItem] = useState({activeItem: 'home' })
    const handleItemClick=(e, {name})=>{
        e.preventDefault();
        console.log("Name: ", name)
        setMenuItem({activeItem: name})
    }
    return <div className="about-me">
        <Menu inverted widths={3} activeItem={menuItem.activeItem}>
            <MenuItem
                name='home'
                active={menuItem.activeItem === 'home'}
                onClick={handleItemClick}
            />
            <MenuItem
                name='messages'
                active={menuItem.activeItem === 'messages'}
                onClick={handleItemClick}
            />
            <MenuItem
                name='friends'
                active={menuItem.activeItem === 'friends'}
                onClick={handleItemClick}
                to="/"
            />
        </Menu>
    </div>
}
export default About;