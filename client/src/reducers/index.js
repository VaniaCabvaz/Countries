import {ASC_ALPHABET, GET_ACTIVITY, GET_ALL_ACTIVITIES,  GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_NAME, GET__CONTINENT, ORDER_CONTINENT} from '../actions/index';

const initialState = {
  countries: [], 
  allActivities: [],
  countryDetail: {},
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload
      }
    case GET_NAME:
      return {
        ...state,
        countries: action.payload
      }
    case GET__CONTINENT:
      return {
        ...state,
        countries: action.payload
      }
    case GET_ACTIVITY:
      return {
        ...state,
        countries: action.payload
      }
    
    case ASC_ALPHABET:
      return {
        ...state,
        countries: action.payload
      }

    case ORDER_CONTINENT:
      return{
        ...state,
        countries: action.payload
      }
      
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      }

   

    
      
    default:
      return state;
  
  }
  

}

  export default rootReducer;