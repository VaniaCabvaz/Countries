import React from 'react';

import {NavLink} from 'react-router-dom'

import './nav.css';
import worldLogo from './world-logo.png'
import {FaSearch} from 'react-icons/fa'

export default function Nav (){
      
    return (
        <>
        <div className="nav">
            <NavLink to="/">
            <img className="logo" src={worldLogo} alt="logo"/>
            </NavLink>
            <div className="menu">
            <NavLink className="links" to="/home">
                <span>Home</span>
            </NavLink>
            <NavLink className="links" to="/about">
                <span >About</span>
            </NavLink>
            <NavLink className="links" to="/createActivity">
                <span>Create Activity</span>
            </NavLink>
            </div>
            
        </div>
        </>
    )
}