import React from 'react'
import Sidebar from '../Sidebar'
import Container from '../Container'
import "./style.css"


function Background(){

    return(
        <React.Fragment>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <Container />
            </div>
        </React.Fragment>
    )

}

export default Background