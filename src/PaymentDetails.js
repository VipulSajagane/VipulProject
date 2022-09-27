import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from 'formik';
import { Payment } from './schemas/PaymentDetailsValidation';

const initialValues={
  
 cardnumber:"",
 name:"",
 cvv:"",
 
};


function PaymentDetails() {

  const{values,errors,touched,handleBlur,handleSubmit,handleChange}=useFormik({
    initialValues,validationSchema:Payment,
    onSubmit:(values)=>{
      console.log(values.name);
      console.log("in submit");
      alert(values.name);
    }

  });
  return <>
    <div className='backgroundColor'>
    <form className='moduleContents formsBackground paymentDetails backgroundImages'onSubmit={handleSubmit}>
    
    <h1 className='moduleHeadings paymentDetailsHeading '>Payment Details</h1>
    <hr/>

      <Form.Group className="TrainerForm mb-1" controlId="formBasicPassword">
        <Form.Label>Card Number:</Form.Label>
        <Form.Control type="number" name="cardNumber" placeholder="Enter Card Numbe" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <div className='formValidationError'>
                {errors.cardnumber && touched.cardnumber ?(<p>{errors.cardnumber}</p>):null}
                </div>
      <Form.Group className="TrainerForm mb-1" controlId="formBasicPassword">
        <Form.Label>Card Holder Name:</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <div className='formValidationError'>
                {errors.name && touched.name ?(<p>{errors.name}</p>):null}
                </div>

      <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
        <Form.Label>Month</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Month</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </Form.Select>
      </Form.Group>
      

      <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Year</option>
          <option value="1">2017</option>
          <option value="2">2018</option>
          <option value="3">2019</option>
          <option value="4">2020</option>
          <option value="5">2021</option>
          <option value="6">2022</option>
          <option value="7">2023</option>
          <option value="8">2024</option>
          <option value="9">2025</option>
          <option value="10">2026</option>
          <option value="11">2027</option>
          <option value="12">2028</option>
          <option value="12">2029</option>
          <option value="12">2030</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="TrainerForm mb-1" controlId="formBasicPassword">
        <Form.Label>CVV</Form.Label>
        <Form.Control type="number" name="cvv" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <div className='formValidationError'>
                {errors.cvv && touched.cvv ?(<p>{errors.cvv}</p>):null}
                </div>

      <Button variant="primary" type="submit">
        Pay Now
      </Button>
    </form>
    </div>
  </>;


}
export default PaymentDetails;