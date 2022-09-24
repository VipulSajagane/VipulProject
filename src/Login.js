import { useState } from "react";
import { useSearchParams,Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login=()=>{
    let[searchparams]=useSearchParams();
       let status=searchparams.get("status");
    const[inputs,setInputs]=useState({}); 
    const[forgotpassword,setforgotpassword]=useState(false);
        const changeHandler=(event)=>{
            let paramName=event.target.name;
            let paramValue=event.target.value;
            setInputs((values)=>({...values,[paramName]:paramValue}));
        }
const submitHandler=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(inputs));
        
    }
    const passwordHandler=()=>{
        setforgotpassword(true);
    }

return(
    <>    

<div className="backgroundColor">
    {forgotpassword ?
<form onSubmit={submitHandler} className='moduleContents formsBackground moduleContents loginPage backgroundImages'>
        <h2 className='text-center text-primary'>Forgot Password</h2>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control  onChange={changeHandler} value={inputs.name} class="form-control " id="name" placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Date of Birth :</Form.Label>
        <Form.Control type="date" name="dob" onChange={changeHandler} value={inputs.dob} class="form-control" id="dob"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button className="ownerFormButton" variant="primary" type="submit">
        Submit
      </Button>
   
    </form>
    :
    <form class="form-controller container moduleContents formsBackground moduleContents loginPage backgroundImages" onSubmit={submitHandler}>
    <h2 class="text-center loginHeading" >Login Page</h2>
  <div>
  <lable for="username"  class="form-label" >Username : </lable>
  <input type="text" name="username" onChange={changeHandler} value={inputs.username} class="form-control " id="userName"/>
  </div>
  <div>
  <lable for="password"  class="form-label"  onChange={changeHandler}>Password : </lable>
  <input type="password" name="password" onChange={changeHandler} value={inputs.password} class="form-control" id="password"/>
  </div>
  <button type="submit" class="form-control mt-4 btn btn-primary">Login</button>
  <div button className="loginPage loginHeading"  name="fogot" id="fogot " onClick={passwordHandler}>forgot password ?</div>
  { status ? <p>You are Succesfully register.</p>:null}
  </form>
  
    }
    
    <Link to="/ownerpage">Owner Page Layout</Link>

    </div>
    
    </>
    );


}

export default Login;