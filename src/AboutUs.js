
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gym1 from './Images/gym1.jpg' 
import gym2 from './Images/gym2.jpg' 
import gym3 from './Images/gym3.jpg' ;
import Prathmesh from './Images/Prathmesh.jpeg' 
import Vipul from './Images/Vipul.jpeg' 
import Akash from './Images/Akash.jpeg'
import Kirtee from './Images/Kirtee.jpeg'
import  Vaibhav from './Images/Vaibhav.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import './myStyles.css'
import  Sir from './Images/Sir.jpeg'


function Aboutus() {
  return (
    <>
    <div>
    <div>
     
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gym2}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover"  }}
        />
        <Carousel.Caption>
          <h3>About Us</h3>
          <p>“All progress takes place outside the comfort zone.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gym3}
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>About Us</h3>
          <p>“Once you are exercising regularly, the hardest thing is to stop it.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gym1}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>About Us</h3>
          <p>
          “Push harder than yesterday if you want a different tomorrow.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
     <div>
    
     <div className='aboutUsmoto'>
      
      <p>
      “To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.”
      <p>-Buddha</p>
      </p>

    </div >


      <label className='aboutUsheading '>Our Story</label>
      <p className='aboutUstext'>
      In 1993, the first Fitness First club opened in Borvali in the Mumbai. Over the next decade and a half, Fitness first was present in over 16 countries, including India making it a leader in the global fitness industry. In 2018, Fitness First India was acquired by cure.fit, India's largest chain of fitness centres that offers energetic group workouts and multiple workout formats to choose from.
      </p>

    </div>
    <section className="row g-0 py-0 text-center guideImage teamadjust">
    <label className='teamheading'>Meet Our Team</label>
    <div class="col-lg-2 col-sm-3 team-member">
         <div class="team-member-img">
            <img src={Sir} alt=""style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href=''><i class="bx bxl-twitter"></i></a>
               <a href=''><i class="bx bxl-instagram"></i></a>
               <a href=''><i class="bx bxl-github"></i></a>
            </div>
         </div>
         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Prasanna Borate</h4>
            
            <div class="hline"></div>
            <p class="text-white">Project Guide</p>
         </div>
      </div>
</section>
      
<section className="row g-0 py-0 text-center teamadjust">
   
    
      <div class="col-lg-2 col-sm-5 team-member">
         <div class="team-member-img" >
            <img src={Vipul} alt=""style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href=""><i class="bx bxl-twitter"></i></a>
               <a href=""><i class="bx bxl-instagram"></i></a>
               <a href=""><i class="bx bxl-github"></i></a>
            </div>
         </div>
         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Vipul Sajagane</h4>
            
            <div class="hline"></div>
            <p class="text-white">Full Stack Developer</p>
         </div>
      </div>
      <div class="col-lg-2 col-sm-5 team-member even">
         <div class="team-member-img">
            <img src={Vaibhav} alt=""style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href="#"><i class="bx bxl-twitter"></i></a>
               <a href="#"><i class="bx bxl-instagram"></i></a>
               <a href="#"><i class="bx bxl-github"></i></a>
            </div>
         </div>
         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Vaibhav Chavan</h4>
           
            <div class="hline"></div>
            <p class="text-white">Full Stack Developer</p>
         </div>
      </div>
      

      <div class="col-lg-2 col-sm-5 team-member">
         <div class="team-member-img">
            <img src={Prathmesh} alt="" style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href="#"><i class="bx bxl-twitter"></i></a>
               <a href="#"><i class="bx bxl-instagram"></i></a>
               <a href="#"><i class="bx bxl-github"></i></a>
            </div>
         </div>
         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Prathmesh Shinde</h4>
            
            <div class="hline"></div>
            <p class="text-white">Full Stack Developer</p>
         </div>
      </div>
      <div class="col-lg-2 col-sm-5 team-member even">
         <div class="team-member-img">
            <img src={Akash} alt="" style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href="#"><i class="bx bxl-twitter"></i></a>
               <a href="#"><i class="bx bxl-instagram"></i></a>
               <a href="#"><i class="bx bxl-github"></i></a>
            </div>
         </div>
         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Akash Patil</h4>
            
            <div class="hline"></div>
            <p class="text-white">Full Stack Developer</p>
         </div>
      </div>

      <div class="col-lg-2 col-sm-5 team-member">
         <div class="team-member-img">
            <img src={Kirtee} className='aboutusImage' alt="" style={{ height: "300px", objectFit: "contain"  }}/>
            <div class="social-icons">
               
               <a href="#"><i class="bx bxl-twitter"></i></a>
               <a href="#"><i class="bx bxl-instagram"></i></a>
               <a href="#"><i class="bx bxl-github"></i></a>
            </div>
         </div>

         <div class="p-4">
            <h4 class="title-sm mt-3 mb-0 text-white">Kirtee Agarwal</h4>
            
            <div class="hline"></div>
            <p class="text-white">Full Stack Developer</p>
         </div>
      </div>
   </section>
 
{/* <div className='backgroundColorteam'>
  <label className='aboutUsheading'>Our Team</label>
    <CardGroup >
      <Card>
        <Card.Img variant="top" src={Vipul} />
        <Card.Body  >
          <Card.Title>Vipul Sajagane</Card.Title>
       
        </Card.Body>
        <Card.Footer >
          <small className="text-muted ">  Full Stack Developer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={gym1} />
        <Card.Body>
          <Card.Title>Vaibhav Chavan</Card.Title>
   
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Full Stack Developer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={gym1} />
        <Card.Body>
          <Card.Title>Kirti Agarwal</Card.Title>
        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Full Stack Developer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Prathmesh} />
        <Card.Body>
          <Card.Title>Prathmesh Shinde</Card.Title>
       
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Full Stack Developer</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={gym1} />
        <Card.Body>
          <Card.Title>Akash Patil</Card.Title>
   
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Full Stack Developer</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div> */}


    <div>
      <label className='aboutUsheadingphilosophy'>Our Philosophy</label>
      <p className='aboutUstextphilosophy'>
      To offer the best equipment, range of classes, knowledgeable staff and personal advice in a welcoming environment
      </p>

    </div>


    
    <div className='backgroundColor'>
      <label className='aboutUscontactUshead'>Contact Us</label>
      <p className='aboutUscontactUstext'>
       <h4 > Email : smartandfit@gmail.com</h4>
       <h4 > Contact : 02648941721</h4>
       <h4> Instagram : @smartandfit</h4>
       <h4> LinkedIn : @smartandfit</h4>
       <h4> Address : Main Branch Mumbai 400092 </h4>
      </p>

    </div>
   
    </div>

    </>
  );
}

export default  Aboutus;