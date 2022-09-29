import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useFormik } from "formik";
// import { useNavigate,useSearchParams } from "react-router-dom";
import { useNavigate,useSearchParams } from 'react-router-dom';
import { Workoutpp } from './schemas/WorkoutValidation';
import { useState,useEffect } from "react";

const UpdateWorkoutPlan = () => {
 
    let navigate=useNavigate();

    let[searchparams]=useSearchParams();
    let id=searchparams.get("id");
    const[initialValues,setInetials]=useState({
        day:"",
        workout:"",
         workoutDetails:"",
        });

        useEffect(()=>{
            let url=`http://localhost:8080/getWorkoutPlan/${id}`;
           axios.get(url).then((response)=>{
             initialValues.id=response.data.id;
             initialValues.name=response.data.day;
             initialValues.username=response.data.workout;
             initialValues.age=response.data.workoutDetails;
             setInetials( response.data);
                 
           }).catch((error)=>{
               alert(error + "In error");
                   })       
          },[]);

          const{values,errors,touched,handleChange,handleBlur,handleSubmit}=useFormik({
            initialValues,
          validationSchema:Workoutpp,
           onSubmit:(values)=>{
                 
            axios.put('http://localhost:8080/UpdateWorkoutPlan',values)
            .then(response => {
                          if(response.data)
                          navigate(`/workoutdata?status=${response.data}`);
                          else
                          navigate(`/UpdateWorkoutPlan`);

            })
            .catch(error => {  alert(error);  });

           },
        });

  return (
    <>
    <div className='backgroundColor'>
    
    <Form  action="" onSubmit={handleSubmit}    className='moduleContents formsBackground workoutPlan backgroundImages'> 
    <h1 className='moduleHeadings workoutPlanHeading'>Update Workout Plan</h1>
    <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day"    value={values.day} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day && touched.day ? (<p>{errors.day}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout"    value={values.workout} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout && touched.workout ? (<p>{errors.workout}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="WorkoutDetails"    value={values.workoutDetails} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails && touched.workoutDetails ? (<p>{errors.workoutDetails}</p>):null}
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default UpdateWorkoutPlan;