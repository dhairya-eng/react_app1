import React, { useState } from 'react'
import Cards from './Cards';
import menu from './menu.json'
function Filter() {
    const [item,setitem]=useState(menu);
return (
    <div>
        {
            item.map((elem)=>{
                const {state,city}=elem;
                return(
                  <Cards 
                    city={city}
                    state={state}/>  
                )

            })
        }
        
      
    </div>
  )
}

export default Filter