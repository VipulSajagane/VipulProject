import * as Yup from 'yup';

export const TraineeSignUp=Yup.object({
    name:Yup.string().min(4).max(21).required("*Please enter your name"),
    username:Yup.string().min(4).max(12).required("*Please enter your username"),
    password:Yup.string().min(4).max(12).required("*Please enter your password"),
    confirm_password:Yup.string().min(4).max(12).required("*Please enter your re-enter password").oneOf([Yup.ref("password"),null], "Password must match"),
    age:Yup.number().positive("*Age must be positive").required("*Please enter your Age").min(0,"*Age must be in between 0 to 150").max(0,"*Age must be in between 0 to 150"),
    gender:Yup.string().required("*Please select your gender"),
    phoneno:Yup.string().required("*Please enter your phone number").matches(/^[0-9]+$/, "Must be only digits").min(10,'*Must be exactly 10 digits').max(10,'*Must be exactly 10 digits'),
    emailid:Yup.string().min(4).required("*Please enter your email"),
    adharno:Yup.string().min(12).max(12).required("*Please enter your Adhar number"),
    joiningdate:Yup.date().required("*Please enter your joining date"),
    address:Yup.string().min(4).max(35).required("*Please enter your address"),
    
});