import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from 'formik';
import { calorie } from './schemas/calorieCalValidation';
import  { useState } from "react";

const initialValues={
     age:"",
    height:"",
    weight:"",
    activity:"",
    calories:"",
  };


const BMICalculator=()=>{
        
    

    const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
        initialValues,validationSchema:calorie,
        onSubmit:(values)=>{
          console.log(values.age);
          console.log("in submit");

           values.calories = ((10.0 * values.weight)+(6.25 * values.height)-(5.0 * values.age))+5;
   

        }
    
      })
 

    return (
        <>
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground calorieCounter backgroundImages' onSubmit={handleSubmit}>
            <h2 className='calorieCounterHeading'>BMI Calculator</h2>
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

              
              

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <button className='btn btn-success calorieButton' ><centre>Your calories: {values.calories}</centre></button>
            </form>
            </div>
        </>
    );
}

export default BMICalculator