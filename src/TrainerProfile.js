import React from 'react';
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage
} from 'mdb-react-ui-kit';
import profilepic from './Images/profilepic.jpg'
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
import axios from 'axios';

const TrainerProfile=()=>{
  let[searchparams]=useSearchParams();
  let username=searchparams.get("username");
  let navigate=useNavigate();
  const [responseData, setResponseData] = useState({});
  
 useEffect(()=>{
  axios.get(`http://localhost:8080/getTrainerbyname/${username}`).then((response)=>{
     
      setResponseData(response.data);
      // alert(responseData.name)
      alert("data added")
 
     
   
  }).catch((error)=>{
      alert(error);
          })
 },[]);

return (
    <>
     <section style={{ backgroundColor: '#eee' }}>
       
     <div className='OwnerProfile'>
     <h1 className='trainerProfileHeading'>Trainer Profile</h1>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={profilepic}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Backend Developer</p>
                <p className="text-muted mb-4">CDAC Mumbai</p>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.phoneno}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Aadhar Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.adharno}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                 
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Joining</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{responseData.joiningdate}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    </section>
    
    </>
   
);


};

export default TrainerProfile;