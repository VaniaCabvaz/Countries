import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import { getDetail } from '../../../actions';
import fondo2 from './fondo2.jpg'
import './detail.css'


export default function Detail (){
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail);
    const {id}=useParams();

    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch])

    console.log("ESTO ES EL ID",id)
    console.log("ESTO ES EL OBJETO",countryDetail)

    function area(num){
        if(num>1000000){
            return Math.round(num/1000000)+"millions km²"
        }
        else if(num>100000){
            return Math.round(num/1000)+"km²"
        }
        else{
            return num + "km²"
        }
    }

    return (
        <>
                <div className="first-container">
                    <div className="container-detail">
                        <div className="flag-title">
                        <img  className="flag-details" src={countryDetail.image} alt="flag"/> 
                        <h3 key={countryDetail.id} className="h3-detail">{countryDetail.name}({countryDetail.id})</h3>
                        </div>
                        <hr></hr>
                        
                        <div className="details">
                        <div>
                            <p className="p-title">Capital</p> 
                            <p className="p-detail">{countryDetail.capital}</p>
                        </div>
                        <div>
                            <p className="p-title">Subregion</p> 
                            <p className="p-detail"> {countryDetail.subregion}</p>
                        </div>
                        <div>
                            <p className=" p-title">Area</p> 
                            <p className="p-detail"> {area(countryDetail.area)}</p>
                        </div>
                        </div>
                    </div>
                   
                            <div className="first-activities">
                        { countryDetail.activities ? countryDetail.activities.map((elemento)=>(
                            <>
                            <div className="container-activities">
                                <img className="image-activities" src={fondo2} alt="background"/>
                                <div className="second-container-activities">
                                <div className="name-activities-front"> 
                                    <h2>{elemento.name.toUpperCase()}</h2>
                                    </div>
                                    <div className="elements-activities-back">
                                        <p>Difficulty:  {elemento.difficulty}</p>
                                        <p>Duration:  {elemento.duration} min</p>
                                        <p>Season: {elemento.season}</p>
                                    </div>
                                </div>
                            </div>
                            
                            </>
                        )) : null
                    }
</div>
                     
                      


                    </div>
                
            

                
            
        

        </>
    )
}