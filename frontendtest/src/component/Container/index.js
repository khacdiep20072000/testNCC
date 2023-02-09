import React from 'react'
import Content from '../Content'
import Footer from '../Footer'

import "./style.css"


function Container(){

    return(
        <React.Fragment>
            <div className="content">
                <Content />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </React.Fragment>
    )

}

export default Container