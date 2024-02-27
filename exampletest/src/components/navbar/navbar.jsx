import React from 'react'
import "./navbar.css"

export default function NavBar() {

    return (
            <div className ="topNav">
                <div className='topLeft'></div>
                <div className='topCenter'>
                    <ul className='topNavList'>
                        <li className='navListItem'>Home</li>
                        <li className='navListItem'>About</li>
                        <li className='navListItem'>Contact</li>
                        <li className='navListItem'>Write</li>
                        <li className='navListItem'>Logout</li>
                    </ul>
                </div>
                <div className='topRight'>
                    <img className='topPfpImg' src='/images/default_pfp.png' alt='/images/icons/default_pfp.png'/>
                    <ul>
                        <li className='NavListItem'>Login</li>
                        <li className='NavListItem'>Create Account</li>
                    </ul>
                </div>
            </div>
    )
}