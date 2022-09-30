import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useFormik } from "formik";
import { TraineeSignUp } from './schemas/TraineeValidation';
import { useNavigate } from 'react-router-dom';
const initialValues={
  name:"",
  username:"",
  password:"",
  confirm_password:"",
  age:"",
  gender:"",
  phoneno:"",
  emailid:"",
  adharno:"",
  joiningdate:"",
  address:"",
  token:"",
};

const Trainee=()=>{
 
   let navigate=useNavigate();
       const {values,errors,touched,handleBlur,handleSubmit,handleChange }=useFormik({
          initialValues,
          validationSchema:TraineeSignUp,
          onSubmit:(values)=>{
            
          
            
              
            axios.post('http://localhost:8080/addTrainee',values)
            .then(response => {
                          if(response.data)
                          navigate(`/owner?status=${response.data}`);
                          else
                          navigate('/trainee');

            })
            .catch(error => {  alert(error);  });
          },
       });
    
   
    return<>
    <div className='backgroundColor'>
    <form action="" onSubmit={handleSubmit}className='moduleContents formsBackground traineeForm backgroundImages'>
        <h1 className='moduleHeadings traineeHeading allFormHeadings'>TraineeForm</h1>
        <hr/>
        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Token No.:</Form.Label>
        <Form.Control type="text" name="token" value={values.token} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter valid token number" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
         {errors.token && touched.token ? (<p>{errors.token}</p>):null}
         </div>




        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
         {errors.name && touched.name ? (<p>{errors.name}</p>):null}
         </div>

        <Form.Group className="TrainerForm" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="username" value={values.username} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.username && touched.username ? (<p>{errors.username}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={values.password}  onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.password && touched.password ? (<p>{errors.password}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="confirm_password" value={values.confirm_password} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" value={values.age} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.age && touched.age ? (<p>{errors.age}</p>):null}
        </div>
       
      <Form.Group className="TrainerForm " controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male" onBlur={handleBlur} onChange={handleChange}  />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onBlur={handleBlur} onChange={handleChange}/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onBlur={handleBlur} onChange={handleChange}/>
      </Form.Group>
      <div className='formValidationError'>
      {errors.gender && touched.gender ? (<p>{errors.gender}</p>):null}
      </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno"  value={values.phoneno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.phoneno && touched.phoneno ? (<p>{errors.phoneno}</p>):null}
        </div>
 
        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid"  value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className='formValidationError'>
        {errors.emailid && touched.emailid ? (<p>{errors.emailid}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" value={values.adharno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='formValidationError'>
        {errors.adharno && touched.adharno ? (<p>{errors.adharno}</p>):null}
        </div>

        <Form.Group className="TrainerForm " controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date"  value={values.joiningdate} onBlur={handleBlur} onChange={handleChange} name="joiningdate"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  
        <div className='formValidationError'>
        {errors.joiningdate && touched.joiningdate ? (<p>{errors.joiningdate}</p>):null}
        </div>

        <Form.Group className="TrainerForm" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" value={values.address} onBlur={handleBlur} onChange={handleChange} name="address" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        <div className='formValidationError'>
        {errors.address && touched.address ? (<p>{errors.address}</p>):null}
        </div>

        <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    </>;


    
}
export default Trainee;