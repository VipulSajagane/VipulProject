import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const OwnerForm=()=>{

    const[inputs,setInputs]=useState({});
    
    const changeHandler=(event)=>{
        let paramName=event.target.name;
        let paramValue=event.target.value;
        
        setInputs((values)=>({...values,[paramName]:paramValue}));

    };

    const handleSubmit=(event)=>{
        event.preventDefault();
      
    };


    return(
        <>
        <div className="backgroundColor ">
        <form onSubmit={handleSubmit} class="form-control" className='moduleContents formsBackground traineeForm backgroundImages ownerForm'>
        <h1 className='moduleHeadings traineeHeading'>Owner Login Form</h1>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" onChange={changeHandler}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid" onChange={changeHandler}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno" onChange={changeHandler}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button className="ownerFormButton" variant="primary" type="submit">
        Login
      </Button>
    </form>
    </div>
        
        {/* <div className="moduleContents formsBackground moduleContents backgroundImages">
            <form onSubmit={submitHandler} class="form-control">
            <h1 className="moduleHeadings ownerHeading">Owner Login Form</h1>
            <hr/>
            <div class="    mb-3 ms-2">
            <label for="ownerName">Name :</label>
            <input type="text" id="ownerName"  name="ownerName" class="form-control ms-200"  value={inputs.ownerName}   onChange={changeHandler}></input>
            
            <label  for="ownerEmail" >Email :</label>
            <input type="email" name="ownerEmail" id="ownerEmail"  class="form-control"  value={inputs.ownerEmail}  onChange={changeHandler}></input>
            
            <label  for="ownerPhoneNo"  >Phone No.:</label>
            <input type="number" name="ownerPhoneNo" id="ownerPhoneNo" class="form-control" value={inputs.ownerPhoneNo}   onChange={changeHandler}></input>
           
              <button type="submit" class="btn btn-primary p-2">submit</button>
              </div>
            </form>
        </div> */}
            
        </>


    );

}

export default OwnerForm;