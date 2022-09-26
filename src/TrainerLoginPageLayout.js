import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './myStyles.css'
import { Link, Outlet, Route, Router } from 'react-router-dom';
function TrainerLoginPageLayout(){
    return(
    <>
    <Navbar className= 'navbar active' bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="" className='heading'>Trainer Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link className='margin' href="#action1"><Link to='/HomePage' className='routing'>Home</Link></Nav.Link> */}
          <Nav.Link><Link to='/trainertraineedata' className='routing'> Trainee Info</Link></Nav.Link>
          <Nav.Link><Link to='/trainerworkoutplan' className='routing'> Workout Plan</Link></Nav.Link>
          <Nav.Link><Link to='/trainercaloriecounter' className='routing'> Calorie Counter</Link></Nav.Link>
          <Nav.Link><Link to='/trainerbmicalculator' className='routing'>BMI Calculator</Link></Nav.Link>
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


    
    </>
    )
}

export default TrainerLoginPageLayout;