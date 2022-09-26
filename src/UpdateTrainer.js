import { useFormik } from "formik";
import { useNavigate,useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { TrainerSignUp } from './schemas/TrainerValidation';
import { useState,useEffect } from "react";

const UpdateTrainer=()=>{
   
    let navigate=useNavigate();

    let[searchparams]=useSearchParams();
  
       
  
            let id=searchparams.get("id");
           
            const[initialValues,setInetials]=useState({
              trainerId:"",
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
              });
   useEffect(()=>{
     let url=`http://localhost:8080/getTrainer/${id}`;
    axios.get(url).then((response)=>{
      initialValues.trainerId=response.data.trainerId;
      initialValues.name=response.data.name;
      initialValues.username=response.data.username;
      initialValues.age=response.data.age;
      initialValues.phoneno=response.data.phoneno;
      initialValues.email=response.data.email;
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
          validationSchema:TrainerSignUp,
           onSubmit:(values)=>{
       
            alert(values.gender);
              
            axios.put('http://localhost:8080/updateTrainer',values)
            .then(response => {
                          if(response.data)
                          navigate(`/trainerdata?status=${response.data}`);
                          else
                          navigate('/UpdateTrainee');

            })
            .catch(error => {  alert(error);  });

           },


        });

       
    return(<>
    <div className='backgroundColor'>
    <form action="" onSubmit={handleSubmit} className='moduleContents formsBackground traineeForm backgroundImages'>
        <h1 className='moduleHeadings traineeHeading'>Update Trainer Information</h1>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text"   name="name"  value={values.name} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
         {errors.name && touched.name ? (<p>{errors.name}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" defaultValue="My default value" name="username" value={values.username} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.username && touched.username ? (<p>{errors.username}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={values.password}  onBlur={handleBlur} onChange={handleChange} disabled/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.password && touched.password ? (<p>{errors.password}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="confirm_password" value={values.confirm_password} onBlur={handleBlur} onChange={handleChange} disabled/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>):null}
        
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" value={values.age} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.age && touched.age ? (<p>{errors.age}</p>):null}
   
       
      <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male" onBlur={handleBlur} onChange={handleChange}  />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onBlur={handleBlur} onChange={handleChange} />
      <MDBRadio name='gender' id='other' label='Other'  value="other" onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      {errors.gender && touched.gender ? (<p>{errors.gender}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno"  value={values.phoneno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.phoneno && touched.phoneno ? (<p>{errors.phoneno}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="email"  value={values.email} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.email && touched.email ? (<p>{errors.email}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" value={values.adharno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        {errors.adharno && touched.adharno ? (<p>{errors.adharno}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date"  value={values.joiningdate} onBlur={handleBlur} onChange={handleChange} name="joiningdate"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  
        {errors.joiningdate && touched.joiningdate ? (<p>{errors.joiningdate}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" value={values.address} onBlur={handleBlur} onChange={handleChange} name="address" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        {errors.address && touched.address ? (<p>{errors.address}</p>):null}

        <Button variant="primary" type="submit">
        Update
      </Button>
    </form>
    </div>
    </>
    
    )


};

export default UpdateTrainer;