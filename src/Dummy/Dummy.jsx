import React, { useEffect, useState } from 'react'


const Dummy = () => {
    const [restaurantList, setRestaurantList] = useState([])

    useEffect( () => {
        getResList()

    } , [])

    const getResList = async() => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.369726076519406&lng=85.33414583862306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        console.log(data);
    }
  return (
    <>
        <h1 className='text-lg font-semibold'>Swiggy Data Fetching...</h1>
    </>

    
  )
}

export default Dummy