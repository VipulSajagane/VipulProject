import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from 'formik';
import { BMIcal } from './schemas/BMICalValidation';
import  { useState } from "react";

const initialValues={
     age:"",
    height:"",
    weight:"",
   
    
  };


const BMICalculator=()=>{
        
    let[bmi,setBmi]=useState(0);

    const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
        initialValues,
        validationSchema:BMIcal,
        onSubmit:(values)=>{
          console.log(values.age);
          //alert("in submit");

         let cal = ((10.0 * values.weight)+(6.25 * values.height)-(5.0 * values.age))+5;
          // alert(cal);
           setBmi(cal);

        }
    
      })
 

    return (
        <>
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground calorieCounter backgroundImages' onSubmit={handleSubmit}>
            <h2 className='calorieCounterHeading allFormHeadings'>BMI Calculator</h2>
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
                <div className='formValidationError mb-3'>
                {errors.weight && touched.weight ?(<p>{errors.weight}</p>):null}
                </div>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <button className='btn btn-success calorieButton' ><centre>Your calories: {bmi}</centre></button>
            </form>
            </div>
            
        </>
    );
}

export default BMICalculator