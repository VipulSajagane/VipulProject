import React from 'react';
import {  useState,useEffect } from "react";
import axios from 'axios';

import { Paragraph } from 'grommet';

const DietPlan = () => {
 
    const[dietData,setDietData]= useState({});
    // const diet = JSON.parse(dietData);

    useEffect(()=>{
        axios.get('http://localhost:8080/getDietPlan/1').then((response)=>{
           
          setDietData(response.data);
                  
        }).catch((error)=>{
            alert(error);
                })
       },[]);
      
    
 return(<>
<h1 className="dietPlanHeading">Diet Plan Page</h1>
 {/* <h3>{diet}</h3> */}
 <h3>{dietData}</h3>

 </>)

}

export default DietPlan;