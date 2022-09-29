import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from 'formik';
import { calorie } from './schemas/calorieCalValidation';
import { Component } from 'react';
import  { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';


const initialValues={
  age:"",
 height:"",
 weight:"",
 activity:"",
};

function CalorieCalculator() {
        const [age, setAge] = useState(0);
        const [height, setHeight] = useState(0);
        const [weight, setWeight] = useState(0); 
        const [activity, setActivity] = useState(0);
        const [calorie,setCalorie] = useState(0);

       
        const {values,errors,touched,handleBlur,handleSubmit,handleChange }=useFormik({
           initialValues
        });

        const calculate = (e) => {
          alert(height);
          alert(weight);
          e.preventDefault();
          const formValid = height > 0 && weight > 0;
          if (!formValid) {
            return;
          }
          const calorie = ((10.0 * weight)+(6.25 * height)-(5.0 * age))+5
          setCalorie(calorie);
        };
    
        
    return (
        <>
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground calorieCounter backgroundImages' onSubmit={handleSubmit}>
            <h2 className='calorieCounterHeading'>Calorie Counter</h2>
            <hr />
                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" value={age} onBlur={handleBlur} onChange={(e)=>setAge(e.target.value)}placeholder="Enter Your Age" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.age && touched.age ?(<p>{errors.age}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" name="height" value={height} onBlur="{handleBlur}"  onChange={(e)=>setHeight(e.target.value)} placeholder="Enter your height" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.height && touched.height ?(<p>{errors.height}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" name="weight" value={weight} onBlur={handleBlur} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter your Weight" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className='formValidationError'>
                {errors.weight && touched.weight ?(<p>{errors.weight}</p>):null}
                </div>

                <Form.Group className="CalorieCounter " controlId="formBasicPassword">
                    <Form.Label>Activity</Form.Label>
                    
                    <Form.Select aria-label="Default select example" name="activity" value={activity} onBlur={handleBlur}  onChange={(e)=>setActivity(e.target.value)}>
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

                <Button variant="primary" type="submit" onClick={calculate}>
                   calculate
                </Button>
                <button className='btn btn-success calorieButton' ><centre>Your calories: {calorie}</centre></button>
            </form>
           
            </div>
        </>
    );
}
export default CalorieCalculator;