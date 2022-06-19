import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import './Card.css';
function Cards(props) {
    
     fetch("https://assessment.api.vweb.app/rides").then(Response=>Response.json()).then((data)=>{
        
        console.log(data);
        let ans=" "; 
        data.map((values)=>{
             ans +=` 
             <div class="col">
              <div class="card mb-3 ">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${values.map_url}" class="map" alt="..."/>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                    <h5 class="card-title">Ride id:${values.id}</h5>
                    <p class="card-text">Origin Station:${values.origin_station_code}</p>
                    <p class="card-text">Station_path:[${values.station_path}]</p>
                    <p class="card-text">Date:${values.date}</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                    <p class="card-text">state:${values.state}</p>
                    <p class="card-text">city:${values.city}</p>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
              
        `
        })
        document.getElementById('cd').innerHTML=ans;
        
     })
  return (
   <div className='content' >
        <div id='cd'>
        </div>
    </div>  
  )
}

export default Cards

