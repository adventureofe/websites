import React from 'react'
import './navbar.css'


const Navbar = () => {
    return (
        <div>
            <div id="titlebar"> <h1> Math Website </h1> </div>
            <ul>
                <li> <a href ="#"> home </a> </li>
                <li> <a href ="#"> about </a> </li>
            </ul>
        </div>
    )
}

export default Navbar
