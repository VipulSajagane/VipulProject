import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Component } from 'react';
import  { useState } from "react";
import React from 'react';
// import Item from './Item';
import {bmival} from './schemas/BMICalValidation';

const initialValues={
   age:"",
   height:"",
   weight:""
 };

const backgroundPicture = new URL("./Images/background1.jpg",import.meta.url)
const BMICalculator = () => {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0); 
  const [bmi, setBmi] = useState(0);
  const calculate = (e) => {
    
    
    e.preventDefault();
    const formValid = height > 0 && weight > 0;
    if (!formValid) {
      return;
    }
    const bmi = weight / ((height/100)*(height/100));
    setBmi(bmi);
  };
  
    return (
        <> 
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground bMICalculator backgroundImages'onSubmit={calculate} >
            <h2 className='bMICalculatorHeading'>BMI Calculator</h2>
            {/* <hr />   */}
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Age </Form.Label>
                    <Form.Control type="number"name= "age" placeholder="Enter Your Age" onChange={e => setAge(e.target.value)}/>

                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number"name="height" placeholder="Enter your height" onChange={e => setHeight(e.target.value)}/>

                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number"name="weight" placeholder="Enter your Weight" onChange={e => setWeight(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>

                </Form.Group>
                <Button variant="primary" type="submit">
                   calculate
                </Button>

                <button className='btn btn-success bMIbutton' ><centre>Your BMI: {bmi}</centre></button>
            </form>
    
            
            </div>
        </>
    );
}



export default BMICalculator;