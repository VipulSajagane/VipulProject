import { isContentEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
const TraineeData=()=>{
    
    let[searchparams]=useSearchParams();
    let status=searchparams.get("status");
    let navigate=useNavigate();
    const [responseData, setResponseData] = useState([]);
    

   useEffect(()=>{
    axios.get('http://localhost:8080/getAllTrainee').then((response)=>{
       
        setResponseData(response.data);
     
    }).catch((error)=>{
        alert(error);
            })


   },[]);

   const deleteCilck=(val)=>{
    let id=val.id;
    let url=`http://localhost:8080/deleteTrainee/${id}`;
   
    axios.delete(url)
    .then(response => {
                //   if(response.data)
                //   navigate('trainerdata');
                //   else
                //   navigate('/UpdateTrainee');
                navigate(0);
    })
    .catch(error => {  alert(error);  });
   }

   const updateCilck=(val)=>{
        //alert("In updateCilck");  
        //alert(val.id);  
        let id=val.id;
        navigate(`updatetrainee?id=${id}`);
        
   }
   

    
            return(
                <>
                 { status ? <p>Data Succesfully Updated</p>:null}
                <div class="container mt-5">
                <h2>Trainee Information</h2>
                          
                <table class="table table-striped">
                <thead>
                 <tr>
                 <th>Trainee ID</th>
                  <th> Name</th>
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
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.phoneno}</td>
                    <td><p class="btn btn-primary" onClick={()=>{updateCilck(val)}}>Update</p></td>
                    <td><p class="btn btn-danger" onClick={()=>{deleteCilck(val)}}>Delete</p></td>
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