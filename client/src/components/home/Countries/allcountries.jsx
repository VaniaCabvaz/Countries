import React from 'react';
import { Link } from 'react-router-dom';
import './countries.css'



export default function AllCountries ({countries}){

    return(
        <>
      
        {
            countries.map((elemento)=>{
                return (
                    <>
                    <div className="cards">

                    <div className="container-card">
                            <Link className="linkto" to={`/countries/${elemento.id}`}>
                            <div className="name link">
                            <h3 key={elemento.id}>{elemento.name}</h3>
                            </div>
                            <div className="flag">
                             <img  className="image" src={elemento.image} alt="flag"/> 
                            </div> 
                            <div className="continent">
                            <h4 className="h3-cont">{elemento.continent}</h4>
                            </div>
                            </Link>  
                    </div>
                            
                    </div>
                    
                    
                   </> 
                )
            }) 
        }
        </>
    )
}