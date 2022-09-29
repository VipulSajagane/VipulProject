import { isContentEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
const WorkoutData=()=>{
    
    let[searchparams]=useSearchParams();
    let status=searchparams.get("status");
    let navigate=useNavigate();
    const [responseData, setResponseData] = useState([]);
    
   useEffect(()=>{
    axios.get('http://localhost:8080/getAllWorkoutPlan').then((response)=>{
       
        setResponseData(response.data);
        alert(responseData);
    }).catch((error)=>{
        alert(error);
            })
   },[]);

   const updateCilck=(val)=>{
        //alert("In updateCilck");  
        //alert(val.id);  
        let id=val.id;
        navigate(`updateworkoutplan?id=${id}`);      
   } 
            return(
                <>
                 { status ? <p>Data Succesfully Updated</p>:null}
                <div class="container mt-5">
                <h2>Workout Information</h2>
                          
                <table class="table table-striped">
                <thead>
                 <tr>
                 <th>Workout ID</th>
                  <th> Day</th>
                  <th>Workout</th>
                  <th>Workout Details</th>
                  <th>Update</th>
                 
                 </tr>
                </thead>
                <tbody>
                 {
                  responseData.map(
                   (val) => <tr key="{val.id}"  >
                    <td>{val.id}</td>
                    <td>{val.day}</td>
                    <td>{val.workout}</td>
                    <td>{val.workoutDetails}</td> 
                    <td><p class="btn btn-primary" onClick={()=>{updateCilck(val)}}>Update</p></td>
                    
                   </tr>
                  )
                 }
                </tbody>
               </table>
               </div>
               </>
            );
}

export default WorkoutData;