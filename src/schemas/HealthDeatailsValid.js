import * as Yup from 'yup';

export const healthDetails=Yup.object({
  
    height:Yup.number().positive("*Height must be positive").required("*Please enter your Height").min(0,"*Height must be in between 0 and 300 Centimeters").max(300,"*Height must be in between 0 and 300 Centimeters"),
  
    weight:Yup.number().positive("*Weight must be positive").required("*Please enter your Weight").min(0,"*Weight must be in between 0 and 500 Kilograms").max(300,"*Weight must be in between 0 and 500 Kilograms"),

    dob:Yup.date().required("*Please enter your date of birth"),

    bloodGroup:Yup.string().required("*Please enter you bloodgroup"),

    // check:Yup.string().required("*Please check this checkbox"),
})