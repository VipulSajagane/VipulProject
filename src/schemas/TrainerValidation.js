import * as Yup from 'yup';

export const TrainerSignUp=Yup.object({
   name:Yup.string().min(4).max(21).required
   ("*Please enter your name"),
   username:Yup.string().min(4).max(12).required
   ("*Please enter your username"),
   password:Yup.string().min(4).max(12).required("*Please enter your password"),
    confirm_password:Yup.string().min(4).max(12).required("*Please  re-enter your password").oneOf([Yup.ref("password"),null], "*Password must match"),
    age:Yup.number().positive("*Age must be positive").required("*Please enter your Age").min(0,"*Age must be in between 0 to 150").max(150,"*Age must be in between 0 to 150"),
   gender:Yup.string().required("Please enter your gender"),
    email:Yup.string().email("*Invalid email format").min(4).required("*Please enter your email"),
    adharno:Yup.string().required("*Please enter your Aadhar number").matches(/^[0-9]+$/, "Must be only digits").min(12, '*Must be exactly 12 digits').max(12, '*Must be exactly 12 digits'),
    joiningdate:Yup.date().required("*Please enter your joining date"),
    address:Yup.string().min(4).max(35).required("*Please enter your address"),
    phoneno:Yup.string().required("*Please enter your phone number").matches(/^[0-9]+$/, "*Must be only digits").min(10, '*Must be exactly 10 digits').max(10, '*Must be exactly 10 digits')

});