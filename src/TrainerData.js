import axios from 'axios';
import {  useState,useEffect } from "react";
import {Link} from 'react-router-dom';
const TrainerData=()=>{
    
    const [responseData, setResponseData] = useState([]);
   

   useEffect(()=>{
    axios.get('http://localhost:8080/getAllTrainer').then((response)=>{
       
        setResponseData(response.data);
     
    }).catch((error)=>{
        alert("Error");
            })
   },[]);
     

    
            return(
                <>
                <div class="container mt-3">
                <h2>Trainee Information</h2>
                          
                <table class="table table-striped">
                <thead>
                 <tr>
                  <th>Trainer Name</th>
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
    <td><Link to="/car/update"  class="btn btn-primary" >Update</Link> </td>
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

export default TrainerData;