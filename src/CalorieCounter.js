import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from 'formik';
import { calorie } from './schemas/calorieCalValidation';


const initialValues={
     age:"",
    height:"",
    weight:"",
    activity:"",
  };


const CalorieCounter=()=>{
        
    const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
        initialValues,validationSchema:calorie,
        onSubmit:(values)=>{
          console.log(values.age);
          console.log("in submit");
          alert(values.gender);
        }
    
      })
 

    return (
        <>
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground calorieCounter backgroundImages' onSubmit={handleSubmit}>
            <h2 className='calorieCounterHeading'>Calorie Counter</h2>
            <hr />
                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" value={values.age} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter Your Age" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.age && touched.age ?(<p>{errors.age}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" name="height" value={values.height} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter your height" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.height && touched.height ?(<p>{errors.height}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" name="weight" value={values.weight} onBlur={handleBlur}  onChange={handleChange} placeholder="Enter your Weight" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.weight && touched.weight ?(<p>{errors.weight}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Activity</Form.Label>
                    
                    <Form.Select aria-label="Default select example" name="activity" value={values.activity} onBlur={handleBlur}  onChange={handleChange}>
                        <option>Select menu</option>
                        <option value="1">No Exercise</option>
                        <option value="2">Light: exercise 1-3 times/weeko</option>
                        <option value="3">Moderate: exercise 4-5 times/week</option>
                        <option value="4">Active: daily exercise or intense exercise 3-4 times/week Exercise</option>
                        <option value="5">Very Active: intense exercise 6-7 times/week</option>
                        <option value="6">Extra Active: very intense exercise daily, or physical jobe</option>

                    </Form.Select>
                </Form.Group>
                <div className='formValidationError mb-3'>
                {errors.activity && touched.activity ?(<p>{errors.activity}</p>):null}
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        </>
    );
}

export default CalorieCounter