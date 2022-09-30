import { useRef, useState } from "react";
import { useSearchParams,Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login=()=>{
    let formRef = useRef();
    let navigate = useNavigate();
    let [isError, setIsError] = useState(false);
    let [response, setResponse] = useState(false);
    let [user, setUser] = useState({ username: "", password: "" });
    let inputChangeHadler = (e) => {
      const newuser = { ...user, [e.target.name]: e.target.value };
      setUser(newuser);
    };

    let [isUserRegistered,setIsUserRegistered]=useState(false);

   let [searchparam]=useSearchParams();
    let registerStatus=searchparam.get("status");
      
    if(registerStatus){
      
      setTimeout(() => setIsUserRegistered(false), 2500);

    }
  
    const processLogin = async (e) => {
      try {
        // validation
        e.preventDefault();
        e.stopPropagation();
  
        formRef.current.classList.add("was-validated");
        if (!formRef.current.checkValidity()) {
          return;
        }
     
            let username=user.username;
            let password=user.password;

        // api call
       const url = `http://localhost:8080/getLogin/${username}/${password}`;
        const resp = await axios.get(url);
            let role=resp.data.role;
            localStorage.setItem("status",resp.data.status);

        if (role=="owner") {
          // store jwt
          // let data = resp.data.jwt;
       // console.log(resp.data.id)
  
          // forward the user to home page
          sessionStorage.setItem("user",username);
          navigate(`/ownerpage?username=${username}`);
        }
        else if (role=="trainer") {
           
          sessionStorage.setItem("user",username);
            navigate(`/trainerpage?username=${username}`);
           // navigate(`updatetrainer?id=${id}`)
          }
          else if (role=="trainee") {
            sessionStorage.setItem("user",username);
            navigate(`/traineeePage?username=${username}`);
          }else{

                setResponse(true);
                setTimeout(() => setResponse(false), 2500);
          }

      } catch (e) {
        console.error(e);
        setIsError(true);
  
        setTimeout(() => setIsError(false), 2500);
      }
    };










return(
  

<div className="backgroundColor">
    
<form  className='moduleContents formsBackground moduleContents loginPage backgroundImages needs-validation ' ref={formRef}>
        <h2 className='text-center text-primary'>Login</h2>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control  class="form-control " name="username" id="username" placeholder="Enter your Username"  onChange={inputChangeHadler}
            required />
        <Form.Text className="text-muted"></Form.Text>
        <div className="invalid-feedback">Username is required</div>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" name="password"  onChange={inputChangeHadler} class="form-control" id="password" placeholder="Enter your Password"  required/>
        <Form.Text className="text-muted"></Form.Text>
        <div className="invalid-feedback">Password is required</div>
        </Form.Group>

        <Button className="ownerFormButton" variant="primary" onClick={processLogin}>
        Submit
      </Button>

      {isError && (
          <div className="alert alert-danger">
            Invalid Credentials or Network Error!
          </div>
        )}
        {response && (
          <div className="alert alert-danger">
            Invalid Credentials ..Try Again!
          </div>
        )}
         {(isUserRegistered) && (
          <div className="alert alert-success">
            You Are Succesfully Registred...!
          </div>
        )}


    </form>    
    </div>
    );

}


export default Login;