import React from 'react'
import "./style.css"


function Sidebar(){

    return(
            <ul className="sidebar-list">
                <li className="sideber-item active">Home</li>
                <li className="sideber-item">Services</li>
                <li className="sideber-item">News</li>
                <li className="sideber-item">Blog</li>
                <li className="sideber-item">Contact</li>
            </ul>
    )

}

export default Sidebar