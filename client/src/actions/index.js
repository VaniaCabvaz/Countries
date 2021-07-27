import axios from 'axios';



export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_NAME = 'GET_NAME';
export const GET__CONTINENT = 'GET__CONTINENT';
export const ASC_ALPHABET = 'ASC_ALPHABET';
export const ORDER_CONTINENT = 'ORDER_CONTINENT';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';


export const getCountries = () => {
    return async (dispatch) => {
        const countries = await axios.get("http://localhost:3001/countries")
        dispatch({ type: GET_COUNTRIES, payload: countries.data })
        console.log(countries)
    }
}


export const getActivities = () =>{
    return async (dispatch) => {
        const allActivities = await axios.get("http://localhost:3001/activity?all=all")
        dispatch({type: GET_ALL_ACTIVITIES, payload: allActivities.data })
    }
}

export const getActivity = (activity) =>{
    return async (dispatch) => {
        const country = await axios.get(`http://localhost:3001/countries?all=all`)
        dispatch({type: GET_ACTIVITY, payload: country.data.filter((elemento)=> elemento.activities.find((elemento)=> elemento.name === activity)) })
    }
}


export const getName = (name) =>{
    return async (dispatch) => {
        const country = await axios.get(`http://localhost:3001/countries?name=${name}`)
        dispatch({type: GET_NAME, payload: country.data })
    }
}

export const getContinent = (continent) =>{
    return async (dispatch) => {
        const country = await axios.get(`http://localhost:3001/countries?continent=${continent}`)
        dispatch({type: GET__CONTINENT, payload: country.data })
    }
}

export const ascAlphabet = (order) =>{
    return async (dispatch) => {
        const asc = await axios.get(`http://localhost:3001/countries?order=${order}`)
        dispatch({type: ASC_ALPHABET, payload: asc.data })
    }
}

export const orderContinent = (continent, orders) =>{
    return async (dispatch) => {
        const asc = await axios.get(`http://localhost:3001/countries?continent=${continent}&orders=${orders}`)
        dispatch({type: ORDER_CONTINENT, payload: asc.data })
    }
}

export const getDetail = (id)=>{
    return async (dispatch) => {
        const detail = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({ type: GET_COUNTRY_DETAIL, payload: detail.data })
    }
}

export const addActivity = (name, difficulty, duration, season, country)=>{
    axios({
        method: 'POST',
        url: 'http://localhost:3001/activity',
        data: {
            name,
            difficulty,
            duration,
            season,
            country
        }
    }).then(res => console.log(res))
}














