import React, { useEffect } from 'react';
import './home.css';
import {useDispatch } from 'react-redux';
import {getCountries} from '../../actions';
import Searcher from './searcher/searcher';
import './home.css'




export default function Home (){
    const dispatch = useDispatch();
    
   
   useEffect(()=>{
         dispatch(getCountries())
     }, [dispatch]);

    
    return (
        <>
        
         <div className="container">
        <Searcher/>
        </div>
        </>
    )
    }