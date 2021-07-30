import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { getName } from '../../actions';
import './nav.css';
import worldLogo from './world-logo.png'
import {FaSearch} from 'react-icons/fa'

export default function Nav (){
    const dispatch = useDispatch();
    const [name, setName] = useState(null);
    const [Search, setSearch] = useState(true);

    function toggle() {
        setSearch(false);
      }

      function toggle2() {
        setSearch(true);
      }
  
    
    useEffect(() => {
        dispatch(getName(name));
      }, [name, dispatch]);

      function handleChange (e){
        e.preventDefault();
          let name = e.target.value;
          setName(name)
      }
    
      
    return (
        <>
        <div className="nav">
            <NavLink to="/">
            <img className="logo" src={worldLogo} alt="logo"/>
            </NavLink> 
            <div  className={`search-box${ Search ? '1' : '2'} `} >
            <input className="search-input" type="text" placeholder="Buscar" value={name} onChange={(e)=> handleChange(e)}/>
            <span className="search-btn"><FaSearch/></span>
            </div> 
            <div className="menu">
            <NavLink className="links" to="/home">
                <span onClick={toggle2}>Home</span>
            </NavLink>
            <NavLink className="links" id="about" to="/about" >
                <span onClick={toggle}>About</span>
            </NavLink>
            <NavLink className="links" to="/createActivity">
                <span onClick={toggle} >Create Activity</span>
            </NavLink>
            </div>
            
        </div>
        </>
    )
}