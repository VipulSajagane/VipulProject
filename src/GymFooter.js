import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function GymFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block '>
          <span >Get connected with us on social networks: </span>
        </div>

        <div className='footer'>
          <a href='https://www.facebook.com/' className='me-4 text-reset '>
          Facebook 
          </a>
          <a href='https://www.linkedIn.com/' className='me-4 text-reset'>
          LinkedIn
          </a>
          <a href='https://www.twitter.com/' className='me-4 text-reset'>
          Twitter
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
           Instagram
          </a>
          <a href='https://www.github.com/' className='me-4 text-reset'>
          github
          </a>

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SmartAndFit
              </h6>
              <p>
              To offer the best equipment, range of classes, knowledgeable staff and personal advice in a welcoming environment.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Merchandise
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Suppliments
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gym Equipments
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
               Stay-fit
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Workouts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cross-Fit
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                SmartAndFit@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 02648941721
              </p>
             
              <p>
                <MDBIcon icon="phone" className="me-3" /> Main Branch Mumbai 400092
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://SmartAndFit.com/'>
        SmartAndFit.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default GymFooter