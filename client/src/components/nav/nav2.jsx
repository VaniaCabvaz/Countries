import React from 'react';
import {NavLink} from 'react-router-dom'
import './nav.css';
import worldLogo from './world-logo.png'


export default function Nav2 (){
      
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