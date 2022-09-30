import { useFormik } from "formik";
import { useNavigate,useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { TraineeSignUp } from './schemas/TraineeValidation';
import { useState,useEffect } from "react";

const UpdateTrainerTrainee=()=>{
   
    let navigate=useNavigate();

    let[searchparams]=useSearchParams();
  
       
  
            let id=searchparams.get("id");
           
            const[initialValues,setInetials]=useState({
              id:"",
              name:"",
              username:"",
              password:"",
              confirm_password:"",
              age:"",
              gender:"",
              phoneno:"",
              emailid:"",
              adharno:"",
              joiningdate:"",
              address:"",
              });
   useEffect(()=>{
     let url=`http://localhost:8080/getTrainee/${id}`;
    axios.get(url).then((response)=>{
      initialValues.id=response.data.id;
      initialValues.name=response.data.name;
      initialValues.username=response.data.username;
      initialValues.age=response.data.age;
      initialValues.phoneno=response.data.phoneno;
      initialValues.emailid=response.data.emailid;
      initialValues.adharno=response.data.adharno;
      initialValues.joiningdate=response.data.joiningdate;
      initialValues.address=response.data.address;
      initialValues.password=response.data.password;
      initialValues.confirm_password=response.data.password;
      initialValues.gender=response.data.gender;
      setInetials( response.data);
          
    }).catch((error)=>{
        alert(error+ "In error");
            })       
   },[]);
   
 
    
        const{values,errors,touched,handleChange,handleBlur,handleSubmit}=useFormik({
            initialValues,
          validationSchema:TraineeSignUp,
           onSubmit:(values)=>{
       
         
              
            axios.put('http://localhost:8080/updateTrainee',values)
            .then(response => {
                          if(response.data)
                          navigate(`/traineedata?status=${response.data}`);
                          else
                          navigate('/UpdateTrainee');

            })
            .catch(error => {  alert(error);  });

           },


        });

       
    return(<>
    <div className='backgroundColor'>
    <form action="" onSubmit={handleSubmit}className='moduleContents formsBackground traineeForm backgroundImages'>
        <h1 className='moduleHeadings traineeHeading'>Update Trainee Information</h1>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text"   name="name"  value={values.name} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
         {errors.name && touched.name ? (<p>{errors.name}</p>):null}
         </div>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" defaultValue="My default value" name="username" value={values.username} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.username && touched.username ? (<p>{errors.username}</p>):null}
        </div>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={values.password}  onBlur={handleBlur} onChange={handleChange} disabled/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.password && touched.password ? (<p>{errors.password}</p>):null}
        </div>
  
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="confirm_password" value={values.confirm_password} onBlur={handleBlur} onChange={handleChange} disabled/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>):null}
        </div>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" value={values.age} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.age && touched.age ? (<p>{errors.age}</p>):null}
        </div>
       
      <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male" onBlur={handleBlur} onChange={handleChange} disabled />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onBlur={handleBlur} onChange={handleChange} disabled/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onBlur={handleBlur} onChange={handleChange} disabled/>
      </Form.Group>
      <div className='formValidationError'>
      {errors.gender && touched.gender ? (<p>{errors.gender}</p>):null}
      </div>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno"  value={values.phoneno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.phoneno && touched.phoneno ? (<p>{errors.phoneno}</p>):null}
        </div>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid"  value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.emailid && touched.emailid ? (<p>{errors.emailid}</p>):null}
        </div>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" value={values.adharno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='formValidationError'>
        {errors.adharno && touched.adharno ? (<p>{errors.adharno}</p>):null}
        </div>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date"  value={values.joiningdate} onBlur={handleBlur} onChange={handleChange} name="joiningdate"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  
        <div className='formValidationError'>
        {errors.joiningdate && touched.joiningdate ? (<p>{errors.joiningdate}</p>):null}
        </div>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" value={values.address} onBlur={handleBlur} onChange={handleChange} name="address" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='formValidationError'>
        {errors.address && touched.address ? (<p>{errors.address}</p>):null}
        </div>
        <Button variant="primary" type="submit">
        Update
      </Button>
    </form>
    </div>
    </>
    
    )


};

export default UpdateTrainerTrainee;