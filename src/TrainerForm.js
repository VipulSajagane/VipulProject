import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import { TrainerSignUp } from './schemas/TrainerValidation';
import { useFormik } from "formik";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const initialValues={
  name:"",
  username:"",
  password:"",
  confirm_password:"",
  age:"",
  gender:"",
  phoneno:"",
  email:"",
  adharno:"",
  joiningdate:"",
  address:"",
};
const TrainerForm=()=>
{
  let navigate =useNavigate();
  const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
    initialValues,validationSchema:TrainerSignUp,
    onSubmit:(values)=>{
      console.log(values.age);
      console.log("in submit");
      alert(values.gender);

      axios.post('http://localhost:8080/addtrainer',values)
      .then(response =>{
        if(response.data)
                          navigate(`/owner?status=${response.data}`);
                          else
                          navigate('/trainer');
      })
      .catch(error =>{
        alert(error);
      })
    },
  });
    
    return<>
    <div className='backgroundColor'>
    <form action="" className='moduleContents formsBackground trainerForm backgroundImages' onSubmit={handleSubmit}>
    <h1 className='moduleHeadings trainerHeading'>Trainer Form</h1>
    
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" value={values.name} onBlur={handleBlur}  onChange={handleChange} placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div className='validationErrors'>
        {errors.name && touched.name ?(<p>{errors.name}</p>):null}

        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="username"  value={values.username} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter your Name"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.username && touched.username ?(<p>{errors.username}</p>):null}
        </div>


        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={values.password} onBlur={handleBlur}  onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.password && touched.password ?(<p>{errors.password}</p>):null}
        </div>


        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Re-Enter your password" name="confirm_password" value={values.confirm_password} onBlur={handleBlur}  onChange={handleChange}  />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.confirm_password && touched.confirm_password ?(<p>{errors.confirm_password}</p>):null}
        </div>

        
        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" value={values.age} onBlur={handleBlur}  onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.age && touched.age ?(<p>{errors.age}</p>):null}
        </div>
   
       
      <Form.Group className="TrainerForm " controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male"  onBlur={handleBlur} onChange={handleChange} />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onBlur={handleBlur} onChange={handleChange}/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onBlur={handleBlur} onChange={handleChange}/>
      </Form.Group>
      <div className='validationErrors'>
      {errors.gender && touched.gendere ?(<p>{errors.gender}</p>):null}
      </div>


        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno" value={values.phoneno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.phoneno && touched.phoneno ?(<p>{errors.phoneno}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='validationErrors'>
        {errors.email && touched.email ?(<p>{errors.email}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno"value={values.adharno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='validationErrors'>
        {errors.adharno && touched.adharno ?(<p>{errors.adharno}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date" name="joiningdate" value={values.joiningdate} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  
        <div className='validationErrors'>
        {errors.joiningdate && touched.joiningdate ?(<p>{errors.joiningdate}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" name="address" value={values.address} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='validationErrors'>
        {errors.address && touched.address ?(<p>{errors.address}</p>):null}
        </div>


        <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    </>;


    
}
export default TrainerForm;















/*import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';

import { useState } from "react";


const TrainerForm=()=>
{
    const[Inputs,setInputs]=useState({});

    const handleChange=(event)=>{
        let paramName=event.target.name;
        let paramValue=event.target.value;

        setInputs(
            values => ({...values,[paramName]:paramValue })
           );
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(Inputs));
    };

    return<>
    <div className='backgroundColor'>
    <form action="" className='moduleContents formsBackground trainerForm backgroundImages' onSubmit={handleSubmit}>
    <h1 className='moduleHeadings trainerHeading'>TrainerForm</h1>
    <hr/>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="repassword" onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
   
       
      <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male"  onChange={handleChange} />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onChange={handleChange}/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onChange={handleChange}/>
      </Form.Group>


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date" name="joiningdate" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" name="address" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 


        <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    </>;


    
}
export default TrainerForm;*/