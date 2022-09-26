import React from 'react';
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage
} from 'mdb-react-ui-kit';
import profilepic from './Images/profilePhoto.jpg'
const TraineeProfile=()=>{
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
                    <MDBCardText className="text-muted">Kahitari Naav</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">kahitari@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">9999999999</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Home,sweet home</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Joining</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">20-20-2020</MDBCardText>
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
                    <MDBCardText className="text-muted">24</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Height</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">170</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Weight</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">70</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow  className='traineeProfileSecondContainerContent'>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">01-01-1998</MDBCardText>
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