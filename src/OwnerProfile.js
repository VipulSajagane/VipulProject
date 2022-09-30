
import React from 'react';
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage
} from 'mdb-react-ui-kit';
import profilepic from '../src/Images/profilepic.jpg';
import {  useState,useEffect } from "react";
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
import axios from 'axios';
import loggedin from './Images/loggedin.png'
const OwnerProfile=()=>{

  let[searchparams]=useSearchParams();
  //let username=searchparams.get("username");
  //localStorage.setItem('username',username);
  let username=sessionStorage.getItem("user");

  let navigate=useNavigate();
  console.log(username);
  const [responseData, setResponseData] = useState({});
  
 useEffect(()=>{
  axios.get(`http://localhost:8080/getOwnerByName/${username}`).then((response)=>{
     
      setResponseData(response.data);
      // alert(responseData.name)
     
 
     
   
  }).catch((error)=>{
      alert(error);
          })
 },[]);





return (
    <>
     <section style={{ backgroundColor: '#eee' }}>
   
     <div className='OwnerProfile'>
     <img className='loggedinImage' src={loggedin}></img> <div className='loggedinuser'>{responseData.name}</div>
     <h1 className='ownerProfilePageHeading'>Owner Profile</h1>
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
                <p className="text-muted mb-1">Front End Developer</p>
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
                  <MDBCardText className="text-muted">{responseData.phoneNo}</MDBCardText>
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

export default OwnerProfile;