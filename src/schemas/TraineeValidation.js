import * as Yup from 'yup';

export const TraineeSignUp=Yup.object({
    name:Yup.string().min(4).max(12).required("Please enter your name"),
    username:Yup.string().min(4).max(12).required("Please enter your username"),
    password:Yup.string().min(4).max(12).required("Please enter your password"),
    confirm_password:Yup.string().min(4).max(12).required("Please enter your re-enter password").oneOf([Yup.ref("password"),null], "Password must match"),
    age:Yup.string().min(2).max(2).required("Please enter your age"),
    gender:Yup.string().required("Please select your gender"),
    phoneno:Yup.string().min(10).max(10).required("Please enter your phone number"),
    emailid:Yup.string().min(4).required("Please enter your email"),
    adharno:Yup.string().min(12).max(12).required("Please enter your Adhar number"),
    joiningdate:Yup.string().required("Please enter your joining date"),
    address:Yup.string().min(4).max(12).required("Please enter your address"),
    
});