import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"

export default function NavBar() {

    return (
            <div className ="topNav">
                <div className='topLeft'></div>
                <div className='topCenter'>
                    <ul className='topNavList'>
                        <li className='navListItem'>
                            <Link className='link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='navListItem'>About</li>
                        <li className='navListItem'>Contact</li>
                        <li className='navListItem'>
                            <Link className='link' to="/write">
                                Write
                            </Link>
                        </li>
                        <li className='navListItem'>Logout</li>
                    </ul>
                </div>
                <div className='topRight'>
                    <Link className='link' to="/settings">
                    <img className='topPfpImg' src='/images/default_pfp.png' alt='/images/icons/default_pfp.png'/>
                    </Link>
                    
                    <ul>
                        <li className='NavListItem'>
                            <Link className='link' to="/login">Login</Link></li>
                        <li className='NavListItem'>
                            <Link className='link' to={'/createAccount'}>Create Account</Link></li>
                    </ul>
                </div>
            </div>
    )
}