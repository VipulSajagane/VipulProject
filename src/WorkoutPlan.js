import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useFormik } from "formik";
import { Workoutpp } from './schemas/WorkoutValidation';

const initialValues={
  day:"",
  workout:"",
  workoutDetails:""
};

const WorkoutPlan =()=> {

  // alert("Hello....");

  const {values,errors,touched,handleBlur,handleSubmit,handleChange }=useFormik({
    initialValues,
    validationSchema:Workoutpp,
    
    onSubmit:(values)=>{
     
     
      // alert("data added");
     

      axios.post('http://localhost:8080/putWorkoutPlan',values)
      .then(response => {
        if(response.data)
       // navigate(`/owner?status=${response.data}`);
       alert("data added")
      

})
.catch(error => {  alert(error);  });
    },
 });


  return (
    <>
    <div className='backgroundColor'>
    
    <Form  action="" onSubmit={handleSubmit}    className='moduleContents formsBackground workoutPlan backgroundImages'> 
    <h1 className='moduleHeadings workoutPlanHeading allFormHeadings'>WorkoutPlan</h1>
    <hr/>
      <Form.Group className="" controlId="formBasicEmail"  >
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day"    value={values.day}  onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day && touched.day ? (<p>{errors.day}</p>):null}
      </div>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout"    value={values.workout} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout && touched.workout ? (<p>{errors.workout}</p>):null}
      </div>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails"    value={values.workoutDetails} onBlur={handleBlur} onChange={handleChange} />
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

export default WorkoutPlan;