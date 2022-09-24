import { useFormik } from "formik";
import { useNavigate,useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { TraineeSignUp } from './schemas/TraineeValidation';

const UpdateTrainee=()=>{
    console.log("inupdate trainee");
     alert(item.id);
    let navigate=useNavigate();

    let[searchparams]=useSearchParams();
    let item=searchparams.get("val");
    alert(item.id);
    const initialValues={
        name:item.name,
        username:item.username,
        password:item.password,
        confirm_password:item.password,
        age:item.age,
        gender:item.gender,
        phoneno:item.phoneno,
        emailid:item.emailid,
        adharno:item.adharno,
        joiningdate:item.joiningdate,
        address:item.address,
      };
        const{values,errors,touched,handleChange,handleBlur,handleSubmit}=useFormik({
            initialValues,
          validationSchema:TraineeSignUp,
           onSubmit:(values)=>{
            console.log(values.age);
            console.log("in submit"+values);
            alert(values.gender);
              
            axios.post('http://localhost:8080/updateTrainee',values)
            .then(response => {
                          if(response.data)
                          navigate(`/traineedata?status=${response.data}`);
                          else
                          navigate('/UpdateTrainee');

            })
            .catch(error => {  alert(error);  });

           },


        });



    return(<>
    <div className='backgroundColor'>
    <form action="" onSubmit={handleSubmit}className='moduleContents formsBackground traineeForm backgroundImages'>
        <h1 className='moduleHeadings traineeHeading'>TraineeForm</h1>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
         {errors.name && touched.name ? (<p>{errors.name}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="username" value={values.username} onBlur={handleBlur} onChange={handleChange}  placeholder="Enter your Name"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.username && touched.username ? (<p>{errors.username}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" value={values.password}  onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.password && touched.password ? (<p>{errors.password}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="confirm_password" value={values.confirm_password} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>):null}
        
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" value={values.age} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.age && touched.age ? (<p>{errors.age}</p>):null}
   
       
      <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male" onBlur={handleBlur} onChange={handleChange}  />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onBlur={handleBlur} onChange={handleChange}/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onBlur={handleBlur} onChange={handleChange}/>
      </Form.Group>
      {errors.gender && touched.gender ? (<p>{errors.gender}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno"  value={values.phoneno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.phoneno && touched.phoneno ? (<p>{errors.phoneno}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid"  value={values.emailid} onBlur={handleBlur} onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {errors.emailid && touched.emailid ? (<p>{errors.emailid}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" value={values.adharno} onBlur={handleBlur} onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        {errors.adharno && touched.adharno ? (<p>{errors.adharno}</p>):null}


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date"  value={values.joiningdate} onBlur={handleBlur} onChange={handleChange} name="joiningdate"/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  
        {errors.joiningdate && touched.joiningdate ? (<p>{errors.joiningdate}</p>):null}

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" value={values.address} onBlur={handleBlur} onChange={handleChange} name="address" />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 
        {errors.address && touched.address ? (<p>{errors.address}</p>):null}

        <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    </>
    
    )


};

export default UpdateTrainee;