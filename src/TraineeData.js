import { isContentEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
const TraineeData=()=>{
    
    let[searchparams]=useSearchParams();
    let status=searchparams.get("status");

    const [responseData, setResponseData] = useState([]);
    let navigate=useNavigate();

   useEffect(()=>{
    axios.get('http://localhost:8080/getAllTrainee').then((response)=>{
       
        setResponseData(response.data);
     
    }).catch((error)=>{
        alert(error);
            })


   },[]);


   const onUpdate=(val)=>{
    
        alert(val.id);    
        navigate(`ownerpage/updatetrainee?val=${val}`);
        
   }
   

    
            return(
                <>
                 { status ? <p>Data Succesfully Updated</p>:null}
                <div class="container mt-3">
                <h2>Trainee Information</h2>
                          
                <table class="table table-striped">
                <thead>
                 <tr>
                  <th>Trainee Name</th>
                  <th>Age</th>
                  <th>Phone No.</th>
                  <th>Update</th>
                  <th>Delete</th>
                 </tr>
                </thead>
                <tbody>
                 {
                  responseData.map(
                   (val) => <tr key="{val.id}"  >
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.phoneno}</td>
    <td><p  class="btn btn-primary" onClick={()=>{onUpdate(val)}} >Update</p> </td>
    <td><button type="button" class="btn btn-primary"  >Delete</button> </td>
                   </tr>
                  )
                 }
                </tbody>
               </table>
               </div>
               </>

            );


}

export default TraineeData;