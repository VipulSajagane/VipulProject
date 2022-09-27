import * as Yup from 'yup';

export const Payment=Yup.object({
  
    cardnumber:Yup.number().min(2).max(14).required("*Please enter your cardnumber"),

    name:Yup.string().required ("*Please enter your name"),
  
    cvv:Yup.number().required("*Please enter cvv"),

    
 
})