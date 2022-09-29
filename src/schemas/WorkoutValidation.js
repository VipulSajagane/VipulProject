import * as Yup from 'yup';

export const Workoutpp=Yup.object({
  
    day:Yup.string().required ("*Please enter day"),
  
    workout:Yup.string().required("*Please enter workout"),

    workoutDetails:Yup.string().required("*Please enter description"),
});