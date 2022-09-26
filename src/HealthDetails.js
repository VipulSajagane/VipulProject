import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import axios from 'axios';
import {healthDetails} from './schemas/HealthDeatailsValid';
const initialValues={
  
    height:"",
    weight:"",
    dob:"",
    bloodgroup:"",
    // check:""
};
const HealthDetails=()=>{

  const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
    initialValues,validationSchema:healthDetails,
    onSubmit:(values)=>{
      console.log(values);
      alert(values.height);

      axios.post('http://localhost:8080/putHealthDetails',values)
      .then(response =>{
        alert(response.data);
      })
      .catch(error =>{
        alert(error);
      })
    },
  });



  return (
    <>

    <div className='backgroundColor'>
    <Form className='moduleContents formsBackground healthDetails backgroundImages' onSubmit={handleSubmit} > 
    <h1 className='moduleHeadings healthDetailsHeading'>Health Details</h1>
    <hr/>
        <Form.Group className="HealthDetails" controlId="">
        <Form.Label>Height</Form.Label>
        <Form.Control type="text" name="height" value={values.height} onBlur={handleBlur}  onChange={handleChange} placeholder="Enter your Height" />
        <Form.Text className="text-muted"> 
        </Form.Text>
        <div className='formValidationError'>
        {errors.height && touched.height ?(<p>{errors.height}</p>):null}
        </div>

        </Form.Group>
      <Form.Group className="HealthDetails" controlId="">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" name="weight"  value={values.weight} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter your Weight"/>
      </Form.Group>
      <div className='formValidationError'>
        {errors.weight && touched.weight ?(<p>{errors.weight}</p>):null}
        </div>

      <Form.Group className="HealthDetails " controlId="">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" name="date"  value={values.date} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter your Date of Birth" />
      </Form.Group>
      <div className='formValidationError'>
        {errors.date && touched.date ?(<p>{errors.date}</p>):null}
        </div>

      <Form.Group className="HealthDetails" controlId="">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control type="text" name="bloodgroup"  value={values.bloodgroup} onBlur={handleBlur}  onChange={handleChange}placeholder="Enter your Bloodgroup" />
      </Form.Group>
      <div className='formValidationError'>
        {errors.bloodgroup && touched.bloodgroup ?(<p>{errors.bloodgroup}</p>):null}
        </div>

      {/* <Form.Group className="HealthDetails " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="check" label="Confirm" />
      </Form.Group> */}
      {/* <div className='formValidationError'>
        {errors.check && touched.check ?(<p>{errors.check}</p>):null}
        </div> */}


      <Button className='button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default HealthDetails;