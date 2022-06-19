import React from 'react'
import Cards from  './Cards'
import "./home.css";
import Filter from './Filter'    
function Home() {

        // axios.get("http://www.omdbapi.com/?t=`${a}`&apikey=6c2c693f").then((response)=>{
        //     console.log(response.data);
        //     setmovies(response.data.Title);
        //     setposter(response.data.Poster);
        // }) 
    
  
  return (
    <div className='mainsection'>
    <div className='home'>
      <p>Nearest Ride</p>
      <p>Upcoming Ride</p>
      <p>Past Ride</p>
      <div className='filter'>
            <select placeholder='filter' defaultValue="filter">
              <option value="state">state</option>
              <option value="city">city</option>
            </select>
      </div>
    </div>
      <Cards />
    </div>
  )
}

export default Home