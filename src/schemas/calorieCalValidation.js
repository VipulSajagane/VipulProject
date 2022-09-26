import * as Yup from 'yup';

export const calorie=Yup.object({
  
    age:Yup.number().min(1).max(3).required("*Please enter your age"),

    height:Yup.number().required ("*Please enter your height"),
  
    weight:Yup.number().required("*Please enter your weight"),

    activity:Yup.string().required("*Please select option"),
 
})