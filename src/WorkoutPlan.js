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
    <h1 className='moduleHeadings workoutPlanHeading allFormHeadings'>Workout Plan</h1>
    <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day1(Monday)</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day1"    value={values.day1} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day1 && touched.day1 ? (<p>{errors.day1}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout1"    value={values.workout1} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout1 && touched.workout1 ? (<p>{errors.workout1}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails1"    value={values.workoutDetails1} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails1 && touched.workoutDetails1 ? (<p>{errors.workoutDetails1}</p>):null}
      </div>


      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day2(Tuesday)</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day2"    value={values.day2} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day2 && touched.day2 ? (<p>{errors.day2}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout2"    value={values.workout2} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout2 && touched.workout2 ? (<p>{errors.workout2}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails2"    value={values.workoutDetails2} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails2 && touched.workoutDetails2 ? (<p>{errors.workoutDetails2}</p>):null}
      </div> 

      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day3(Wednseday)</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day3"    value={values.day3} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day3 && touched.day3 ? (<p>{errors.day3}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout3"    value={values.workout3} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout3 && touched.workout3 ? (<p>{errors.workout3}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails3"    value={values.workoutDetails3} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails3 && touched.workoutDetails3 ? (<p>{errors.workoutDetails3}</p>):null}
      </div> 


      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day4(Thursday)</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day4"    value={values.day4} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day4 && touched.day4 ? (<p>{errors.day4}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout4"    value={values.workout4} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout4 && touched.workout4 ? (<p>{errors.workout4}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails4"    value={values.workoutDetails4} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails4 && touched.workoutDetails4 ? (<p>{errors.workoutDetails4}</p>):null}
      </div> 


      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day5(Fridday)</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" name="day5"    value={values.day5} onBlur={handleBlur} onChange={handleChange}   />
        <Form.Text className="text-muted">  </Form.Text>
      </Form.Group>
      <div className='formValidationError'>
      {errors.day5 && touched.day5 ? (<p>{errors.day5}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Workout</Form.Label>
        <Form.Control type="text" placeholder="Workout" name="workout5"    value={values.workout5} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workout5 && touched.workout5 ? (<p>{errors.workout5}</p>):null}
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WorkoutDetails</Form.Label>
        <Form.Control type="text" placeholder="WorkoutDetails" name="workoutDetails5"    value={values.workoutDetails5} onBlur={handleBlur} onChange={handleChange} />
      </Form.Group>
      <div className='formValidationError'>
      {errors.workoutDetails5 && touched.workoutDetails5 ? (<p>{errors.workoutDetails5}</p>):null}
      </div> 


      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
    </>
  );
}

export default WorkoutPlan;