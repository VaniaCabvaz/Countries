import React from 'react';
import {NavLink} from 'react-router-dom';
import world from './world.png'
import './index.css'


export default function Landing (){
    return(
        < >
            <div className="container">
                <img className="landing" src={world} alt="world map"/>
                <div className="titulo">
                    <h1 className="h1-landing">Countries</h1>
                    <h3 className="h3-landing">Busca información relevante sobre los paises del mundo</h3>
                    <NavLink to="/home"> 
                    <label className="custom-btn btn-landing">Busca paises</label>
                    </NavLink>
                </div>
            </div>
        </>
    )
}