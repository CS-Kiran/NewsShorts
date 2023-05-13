// import PropTypes from 'prop-types'
import React from 'react'
import {
  Link,
} from "react-router-dom";

const Navbar=() => {  
    return (
      <>
        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{fontSize:"2.5em" , fontFamily: "monospace" , color : "#1c1c1c" , fontWeight : "700"}} to="/">NewsShort's</Link>
                <ul className="nav nav-underline">
                    <li className="nav-item mx-3">
                        <Link className="nav-link" aria-current="page" style={{color : "black"}} to="/">Home</Link>
                    </li>

                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/business">Business</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/general">General</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/health">Health</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/science">Science</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}}to="/sports">Sports</Link></li>
                    <li className="nav-item mx-3"><Link className="nav-link" style={{color : "black"}} to="/technology">Technology</Link></li>
                </ul>
            </div>
        </nav>
      </>
    )
}

export default Navbar