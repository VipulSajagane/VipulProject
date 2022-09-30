import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './myStyles.css'
import { Link, Outlet, Route, Router,useNavigate } from 'react-router-dom';
function TrainerLoginPageLayout(){
  let navigate=useNavigate();
  const Logout=()=>{
  
    sessionStorage.clear();
    navigate('/home');
  
  };



    return(
    <>
    <Navbar className= 'navbar active' bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="" className='heading trainerDashboard'>Trainer Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link className='margin' href="#action1"><Link to='/HomePage' className='routing'>Home</Link></Nav.Link> */}
        
          <Nav.Link><Link to='/trainerpage' className='routing navHeading'> View Profile </Link></Nav.Link>
          <Nav.Link><Link to='/trainertraineedata' className='routing navHeading'> Trainee Info</Link></Nav.Link>
            {/* <Nav.Link><Link to='/trainerworkoutplan' className='routing navHeading'> Workout Plan info</Link></Nav.Link>
           <Nav.Link><Link to='/workoutplan' className='routing navHeading'> Workout Plan </Link></Nav.Link> */}
          <Nav.Link><Link to='/trainercaloriecounter' className='routing navHeading'> Calorie Counter</Link></Nav.Link>
          <Nav.Link><Link to='/trainerbmicalculator' className='routing navHeading'>BMI Calculator</Link></Nav.Link>
          <Nav.Link onClick={Logout} className='navHeading logoutNavTrainer'>Logout</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary" className='searchButton'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>


    
    </>
    )
}

export default TrainerLoginPageLayout;






// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './myStyles.css'
// import { Link, Outlet, Route, Router } from 'react-router-dom';
// function TrainerLoginPageLayout(){
//     return(
//     <>
//     <Navbar className= 'navbar active' bg="light" expand="lg">
//     <Container fluid>
//       <Navbar.Brand href="" className='heading'>Trainer</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//          <Nav.Link className='margin navHeading' href="#action1"><Link to='/' className='routing'>Home</Link></Nav.Link>
//           <Nav.Link><Link to='/trainertraineedata' className='routing navHeading'> Trainee Info</Link></Nav.Link>
//           <Nav.Link><Link to='/trainerworkoutplan' className='routing navHeading'> Workout Plan</Link></Nav.Link>
//           <Nav.Link><Link to='/trainerworkoutplaninfo' className='routing navHeading'> Workout Plan Info</Link></Nav.Link>
//           <Nav.Link><Link to='/trainercaloriecounter' className='routing navHeading'> Calorie Counter</Link></Nav.Link>
//           <Nav.Link><Link to='/trainerbmicalculator' className='routing navHeading'>BMI Calculator</Link></Nav.Link>
//           <Nav.Link><Link to='' className='routing navHeading'>Logout</Link></Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2 "
//             aria-label="Search"
//           />
//           <Button  className='searchButton'>Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>


    
//     </>
//     )
// }

// export default TrainerLoginPageLayout;