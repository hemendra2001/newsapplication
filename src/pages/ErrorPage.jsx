import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div  className="container errorpage">
          <h1>Sorry you went to <span className="text-danger">wrong path</span></h1>
         <Link style={{textDecoration:'none',color:'inherit'}} to="/"> <h2 className="mt-3">go to <span className="homeerror">HOME</span></h2>  </Link>
          </div>       
         </>
    )
}

export default ErrorPage
