import React, { Fragment } from "react";

const NotFound404=()=>{
    return <Fragment>
        <div className="main-body">
            <div className="notfound">
                <h1>4<span style={{color: '#F28585'}}>0</span>4</h1>
                <p>Sorry, we can't find this page. You'll find lots to explore on the home page.</p>
                <p ><a href="/" style={{color: '#088395', fontSize: '18px'}}>&#8592; Back to Home</a></p>
            </div>
        </div>
    </Fragment>
}
export default NotFound404;