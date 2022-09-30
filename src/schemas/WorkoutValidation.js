import * as Yup from 'yup';

export const Workoutpp=Yup.object({
  
    day1:Yup.string().required ("*Please enter day"),
    workout1:Yup.string().required("*Please enter workout"),
    workoutDetails1:Yup.string().required("*Please enter description"),
    
    day2:Yup.string().required ("*Please enter day"),
    workout2:Yup.string().required("*Please enter workout"),
    workoutDetails2:Yup.string().required("*Please enter description"),

    day3:Yup.string().required ("*Please enter day"),
    workout3:Yup.string().required("*Please enter workout"),
    workoutDetails3:Yup.string().required("*Please enter description"),

    day4:Yup.string().required ("*Please enter day"),
    workout4:Yup.string().required("*Please enter workout"),
    workoutDetails4:Yup.string().required("*Please enter description"),


    day5:Yup.string().required ("*Please enter day"),
    workout5:Yup.string().required("*Please enter workout"),
    workoutDetails5:Yup.string().required("*Please enter description"),
});