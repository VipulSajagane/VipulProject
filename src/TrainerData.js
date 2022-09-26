import axios from 'axios';

import {  useState,useEffect } from "react";
import {useNavigate,useSearchParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const TrainerData=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);


 
    let[searchparams]=useSearchParams();
    let status=searchparams.get("status");
    let navigate=useNavigate();
    const [responseData, setResponseData] = useState([]);
    

   useEffect(()=>{
    axios.get('http://localhost:8080/getAllTrainer').then((response)=>{
       
        setResponseData(response.data);
     
    }).catch((error)=>{
        alert(error);
            })


   },[]);

   const deleteCilck=(val)=>{
    setShow(false);
    alert(val.trainerId);
    let id=val.trainerId;
    let url=`http://localhost:8080/deleteTrainer/${id}`;
   
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
        alert(val.trainerId);  
        let id=val.trainerId;
        navigate(`updatetrainer?id=${id}`);
        
   }
   

    
            return(
                <>
                 { status ? <p>Data Succesfully Updated</p>:null}
                <div class="container mt-5">
                <h2>Trainee Information</h2>
                          
                <table class="table table-striped">
                <thead>
                 <tr>
                 <th>Trainer ID</th>
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
                   (val) => <tr key="{val.trainerId}"  >
                    <td>{val.trainerId}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.phoneno}</td>
                    <td><p class="btn btn-primary" onClick={()=>{updateCilck(val)}}>Update</p></td>
                    <td>
                        {/* <p class="btn btn-danger" onClick={()=>{deleteCilck(val)}}>Delete</p> */}
                       <div>
                            <Button variant="danger" onClick={handleShow}>
                                Delete
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Deleting Trainee</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={()=>{deleteCilck(val)}}>
                                    delete trianer
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            </div>

                        
                    
                    </td>
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