import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getActivities, getActivity, ascAlphabet, orderContinent} from '../../../actions';
import AllCountries from '../Countries/allcountries';
import Pagination from '../pagination/pagination';
import './searcher.css'

export default function Searcher (){
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.countries);
    const allActivities = useSelector(state => state.allActivities)
    const [continent, setContinent] = useState(null)
    const [activity, setActivity] = useState(null);
    const [order, setOrder] = useState(null);
    const [orders, setOrders] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    

    useEffect(()=>{
        dispatch(getActivities())
    }, [dispatch]);


    useEffect(() => {
        dispatch(getActivity(activity));
      }, [activity, dispatch]);



      useEffect(() => {
        dispatch(ascAlphabet(order));
      }, [order, dispatch]);


      useEffect(() => {
        dispatch(orderContinent(continent, orders));
      }, [continent, orders, dispatch]);


      function handleChangeContinent (e){
        e.preventDefault();
        let continent = e.target.value;
        setContinent(continent)
    }

    function handleChangeActivity (e) {
        e.preventDefault();
        let activity = e.target.value;
        setActivity(activity)
    }


    function handleChangeOrderContinent (e){
        e.preventDefault();
        let orders = e.target.value;
        setOrders(orders)
        
    }

    function handleChangeOrder (e) {
        e.preventDefault();
        let order = e.target.value;
        setOrder(order)
        
    }

     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



    return(
        <>
        <div className="container-search">
            
       
        <div>
                <select className="search-select select-continent" onChange={(e)=> handleChangeContinent(e)} >
                            <option value="" >Select a continent</option>
                            <option >Americas</option>
                            <option >Africa</option>
                            <option >Asia</option>
                            <option >Europe</option>
                            <option >Oceania</option>
                            <option >Polar</option>
                </select>
            </div>
        


        {continent ? 
        <div>
        <select className="search-select select-order"  onChange={(e)=> handleChangeOrderContinent(e)}>
            <option value="">order</option>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>PobA</option>
            <option>PobD</option>
        </select>
    </div> :
        <div>
            <select className="search-select select-order"  onChange={(e)=> handleChangeOrder(e)}>
                <option value="">order</option>
                <option>A-Z</option>
                <option>Z-A</option>
                <option>PobA</option>
                <option>PobD</option>
            </select>
        </div>  }


        <div className="activities">

            <select className="search-select"  onChange={(e)=> handleChangeActivity(e)}>
            <option value="">Select an activity</option>
            {
             allActivities.map((elemento)=>{
                 return (
                     < >

                    <option key={elemento.id} value={elemento.name}>{elemento.name}</option>
                     </>
                 )
             })
            }
            </select>

        </div>

        </div>

        
        
        <AllCountries countries={currentPosts}/>

            <Pagination
        postsPerPage={postsPerPage}
        totalPosts={countries.length}
        paginate={paginate}/>
        </>
    )
}
