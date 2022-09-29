import * as Yup from 'yup';

export const calorieValidation=Yup.object({
  
    age:Yup.number().positive("*Age must be positive").required("*Please enter your Age").min(0,"*Age must be in between 0 to 150").max(150,"*Age must be in between 0 to 150"),

    height:Yup.number().positive("*Height must be positive").required("*Please enter your Height").min(0,"*Height must be in between 0 and 300 Centimeters").max(300,"*Height must be in between 0 and 300 Centimeters"),
  
    weight:Yup.number().positive("*Weight must be positive").required("*Please enter your Weight").min(0,"*Weight must be in between 0 and 500 Kilograms").max(300,"*Weight must be in between 0 and 500 Kilograms"),

    activity:Yup.string().required("*Please select option"),
})