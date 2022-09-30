import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useFormik } from "formik";
import {healthDetails} from './schemas/HealthDeatailsValid'

const initialValues={
    height:"",
    weight:"",
    dob:"",
    bloodGroup:""
    
  };

const HealthDetails = ()=>
{

    const {values,errors,touched,handleBlur,handleSubmit,handleChange }=useFormik({
        initialValues,
        validationSchema:healthDetails,
        onSubmit:(values)=>{
          
         
    
          // axios.post('http://localhost:8080/putHealthDetails',values)
          // .then(response => {
           
           
         
          
    
    // })
    // .catch(error => {  alert(error);  });
        },
     });


    return(
        <>
        <div className='backgroundColor'>
        
        <Form  action="" onSubmit={handleSubmit}    className='moduleContents formsBackground workoutPlan backgroundImages'> 
        <h1 className='moduleHeadings healthdetailsformheading allFormHeadings'>HealthDetails</h1>
        <hr/>
          <Form.Group className="" controlId="formBasicEmail"  >
            <Form.Label>Height</Form.Label>
            <Form.Control type="number" placeholder="Enter the Height" name="height"    value={values.height} onBlur={handleBlur} onChange={handleChange}   />
            <Form.Text className="text-muted">  </Form.Text>
          </Form.Group>
          <div className='formValidationError'>
          {errors.height && touched.height ? (<p>{errors.height}</p>):null}
          </div>
    
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" placeholder="weight" name="weight"    value={values.weight} onBlur={handleBlur} onChange={handleChange} />
          </Form.Group>
          <div className='formValidationError'>
          {errors.weight && touched.weight ? (<p>{errors.weight}</p>):null}
          </div>
    
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>date of Birth</Form.Label>
            <Form.Control type="date" placeholder="date of birth" name="dob"    value={values.dateOfBirth} onBlur={handleBlur} onChange={handleChange} />
          </Form.Group>
          <div className='formValidationError'>
          {errors.dob && touched.dob ? (<p>{errors.dob}</p>):null}
          </div>

          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control type="text" placeholder="bloodGroup" name="bloodGroup"    value={values.bloodGroup} onBlur={handleBlur} onChange={handleChange} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <div className='formValidationError'>
          {errors.bloodGroup && touched.bloodGroup ? (<p>{errors.bloodGroup}</p>):null}
          </div>
          
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        </>
      
    );
}

export default HealthDetails;