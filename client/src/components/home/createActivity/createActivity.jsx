import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCountries, addActivity } from '../../../actions';
import './createActivity.css'


export default function CreateActivity (){
    const dispatch = useDispatch();
    const countries = useSelector(state=>state.countries);
    const [name, setName]= useState("");
    const [difficulty, setDifficulty]= useState("");
    const [duration, setDuration]= useState(0);
    const [season, setSeason]= useState("");
    const [countryS, setCountryS]= useState("");
    const [country, setCountry]= useState([])

    useEffect(() => {
        dispatch(getCountries(countryS));
      }, [countryS, dispatch]);


    function handleChangeName(e){
        let name= e.target.value;
        setName(name) 
    }
    function handleChangeDifficulty(e){
        let difficulty= e.target.value;
        setDifficulty(difficulty) 
    }
    function handleChangeDuration(e){
        let duration= e.target.value;
        setDuration(duration) 
    }
    function handleChangeSeason(e){
        let season= e.target.value;
        setSeason(season) 
    }
    function handleChangeCountry(e){
        let countryS= e.target.value;
        setCountryS(countryS) 
    }

    function handleChangeCountriesSelected (e){
        setCountry([...country, countryS]) 
    }

    function handleSubmit(e){
        e.preventDefault()
        if(name && difficulty && duration && season && country){
            addActivity(name, difficulty, duration, season, country)

        }

    }

        console.log(name, difficulty, duration, season, country)

    return (
        <>
        <div className="container-form">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="sub-container">
                    <div className="third-container">
                        <input
                            className="container-inputs"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                            value={name}
                            onChange={(e)=>handleChangeName(e)}
                        ></input>
                    </div>
                    <div>
                        <select className="container-inputs" onChange={(e)=>handleChangeDifficulty(e)}>
                            <option value={0}>Select a difficulty</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="sub-container">
               <div className="third-container">
                <input
                    className="container-inputs" 
                    type="float"
                    placeholder="Duration"
                    autoComplete="off"
                    value={duration}
                    onChange={(e)=>handleChangeDuration(e)}
                ></input><span>min</span>
                </div>
                    <div>
                    <select className="container-inputs"  onChange={(e)=>handleChangeSeason(e)}>
                        <option value="">Select a season</option>
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Autumn</option>
                        <option>Winter</option>
                    </select >
                    </div>
                </div>
                <div className="sub-container-2">
                <select className="container-inputs" onChange={(e)=>handleChangeCountry(e)}>
                    <option value="">Select a country</option>
                
                        {
                            countries.map((elemento)=>(
                                <>
                                <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                                </>
                            ))
                        }
                    
                </select>
                <button className="buttons-form" onClick={(e)=>handleChangeCountriesSelected(e)} >+</button>
                </div>
                <div className="sub-container-button">
                    <button  className="button-form-submit" type="submit">
                    Add Activity
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}
