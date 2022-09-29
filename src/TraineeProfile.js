import React from 'react';
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage
} from 'mdb-react-ui-kit';
import profilepic from './Images/profilePhoto.jpg'
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
import axios from 'axios';


const TraineeProfile=()=>{

  let[searchparams]=useSearchParams();

  let username=searchparams.get("username");
  let navigate=useNavigate();
  const [responseData, setResponseData] = useState({});
  const [healthData,setHealthData] = useState({});

  
 useEffect(()=>{
  axios.get(`http://localhost:8080/getTraineeByName/${username}`).then((response)=>{
     
      setResponseData(response.data);
      alert(JSON.stringify(responseData));
 
      // console.log(responseData);
   
  }).catch((error)=>{
      alert(error);
          })
 },[]);


 useEffect(()=>{
   axios.get(`http://localhost:8080/getHealthDetailsByName`).then((response)=>{
     
    setHealthData(response.data);
    alert(JSON.stringify(healthData)); 
   
  }).catch((error)=>{
      alert(error);
          })
 },[]);




return (
    <>
    
     <section style={{ backgroundColor: '#eee' }}>
     <div className='traineeProfile'>
     <h1 className='traineeProfileHeading'>Trainee Profile</h1>
      <MDBContainer className="">
        <MDBRow className='traineeProfileFirstContainer'>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={profilepic}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Front End Developer</p>
                <p className="text-muted mb-4">CDAC Mumbai</p>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="">
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
                    <MDBCardText className="text-muted">{responseData.emailid}</MDBCardText>
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
     
     {/* second container starts */}
     
      <MDBContainer className="traineeProfileSecondContainer  py-5">
        <MDBRow>
          <MDBCol lg="7">
            <MDBCard className=" ">
              <MDBCardBody> <h1 className='traineeProfileSecondContainerHeading '>Health Details</h1><hr/>
                <MDBRow className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Age</MDBCardText>
                  </MDBCol>
                  <MDBCol className='' sm="9">
                    <MDBCardText className="text-muted">{responseData.age}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Height</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{healthData.height}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Weight</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{healthData.weight}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{healthData.dateOfBirth}</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Blood Group</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">B+ve</MDBCardText>
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

export default TraineeProfile;