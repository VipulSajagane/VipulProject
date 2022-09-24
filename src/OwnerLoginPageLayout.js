import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Accordion, Alert, Badge, Carousel, Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import './myStyles.css'
import wk1 from './Images/workout1.webp'
import wk2 from './Images/workout2.jfif'
import wk3 from './Images/workout3.jfif'
import wk4 from './Images/workout4.jpg'
import wk5 from './Images/workout5.jpg'
import wk6 from './Images/workout6.jpg'
import hl1 from './Images/hl1.jpg'
import hl2 from './Images/hl2.jpg'
import hl3 from './Images/hl3.jpg'
import HomeSubComponent from './HomeSubComponent';
import { Link, Outlet, Route, Router } from 'react-router-dom';
import navbar from './Navbar';
import {Clock} from "grommet";
import TraineeData from './TraineeData';


function OwnerLoginPageLayout() {



  return (
  <>
   {/* <Navbar className={navbar ? 'navbar active':'navbar'} bg="light" expand="lg"> */}
   <Navbar className= 'navbar active' bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="" className='heading'>Owner Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='margin' href="#action1"><Link to='/ownerprofile' className='routing'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/traineedata' className='routing'> Trainee Info</Link></Nav.Link>
          <Nav.Link><Link to='/trainerdata' className='routing'> Trainer Info</Link></Nav.Link>
          <Nav.Link><Link to='/ownerbmicalculator' className='routing'> Calorie Counter</Link></Nav.Link>
          <Nav.Link><Link to='/ownercaloriecounter' className='routing'>BMI Calculator</Link></Nav.Link>
          <Nav.Link><Link to='' className='routing'>Logout</Link></Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Outlet></Outlet>
  {/* <div>  Hello  </div> <div>  Hello  </div> <div>  Hello  </div>
  <div>  Hello  </div> <div>  Hello  </div> <div>  Hello  </div> */}
  <div>  Hello  </div>
  
  
   
</>
  );
}

export default OwnerLoginPageLayout;