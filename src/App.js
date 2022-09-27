import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HealthDetails from './HealthDetails';
import WorkoutPlan from './WorkoutPlan';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentDetails from './PaymentDetails';
import home from './HomePage';
import HomePage from './HomePage';
import OwnerForm from './OwnerForm';
import Login from './Login';
import Trainee from './Trainee';
import TrainerForm from './TrainerForm';
import BMICalculator from './BMICalculator';
import CalorieCounter from './CalorieCounter';
import MembershipPlan from './MembershipPlan';
import HomeSubComponent from './HomeSubComponent';
import OwnerLoginPageLayout from './OwnerLoginPageLayout';
import TraineeData from './TraineeData';
import TrainerData from './TrainerData';
import OwnerProfile from './OwnerProfile';
import UpdateTrainee from './UpdateTrainee';
import UpdateTrainer from './UpdateTrainer';
import TrainerLoginPageLayout from './TrainerLoginPageLayout';
import TrainerProfile from './TrainerProfile';
import TraineeProfile from './TraineeProfile';
import DietPlan from './DietPlan';
import TraineeeLoginPageLayout from './TraineeeLoginPageLayout.js';


function BasicExample() {
  return (
   <>
   {/* <MembershipPlan/> */}
   {/* <CalorieCounter/> */}
   {/* <PaymentDetails/> */}
   {/* <BMICalculator/> */}
   {/* <TrainerForm/> */}
   {/* <WorkoutPlan/> */}
   {/* <TrainerForm/>    --- Not in use*/}
   {/* <Trainee/> */}
    {/* <Login/>            */}
    {/* <OwnerForm/>      */}
    {/* <HealthDetails/> */}
   {/* <HomePage/> */}
   {/* <TrainerLoginPageLayout/> */}

   <div>
  <BrowserRouter>
    <Routes>
            <Route path='/' element={<><HomePage/><HomeSubComponent/></>}>  </Route>
            <Route path='/home' element={<><HomePage/><HomeSubComponent/></>}></Route>
            <Route path='/trainee' element={<><HomePage/><Trainee/></>}> </Route>
             <Route path='/trainer' element={<><HomePage/><TrainerForm/></>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='/owner' element={<><HomePage/><Login/></>}></Route>
                <Route path='healthdetails' element={<HealthDetails/>}></Route>
                <Route path='workoutplan' element={<WorkoutPlan/>}></Route>
                <Route path='paymentdetails' element={<PaymentDetails/>}></Route>
                
            <Route path='/bmicalculator' element={<><HomePage/><BMICalculator/></>}></Route>
                <Route path='caloriecounter' element={<><HomePage/><CalorieCounter/></>}></Route>
                <Route path='membershipplan' element={<><HomePage/><MembershipPlan/></>}></Route>  
      
       {/* Owner Perspective */}
       <Route>      
       <Route path='ownerpage' element={<><OwnerLoginPageLayout/><OwnerProfile/></>}></Route>
      <Route path='traineedata/' element={<><OwnerLoginPageLayout/><TraineeData/></>}></Route>
      <Route path='trainerdata' element={<><OwnerLoginPageLayout/><TrainerData/></>}></Route>
       <Route path='ownerprofile' element={<><OwnerLoginPageLayout/><OwnerProfile/></>}></Route>   
       <Route path='traineedata/updatetrainee' element={<><OwnerLoginPageLayout/><UpdateTrainee/></>}></Route>
       <Route path='trainerdata/updatetrainer' element={<><OwnerLoginPageLayout/><UpdateTrainer/></>}></Route>
      <Route path='ownerbmicalculator' element={<><OwnerLoginPageLayout/><BMICalculator/></>}></Route>
      <Route path='ownercaloriecounter' element={<><OwnerLoginPageLayout/><CalorieCounter/></>}></Route>
   </Route>
 
  {/* Trainer Perspective */}
  <Route>
  {/* <Route path='HomePage' element={<><HomePage/></>}></Route>  */}
  <Route path='trainerpage' element={<><TrainerLoginPageLayout/><TrainerProfile/></>}></Route>
  <Route path='trainertraineedata/' element={<><TrainerLoginPageLayout/><TraineeData/></>}></Route>
  <Route path='trainertraineedata/updatetrainee' element={<><TrainerLoginPageLayout/><UpdateTrainee/></>}></Route>
  <Route path='trainerworkoutplan' element={<><TrainerLoginPageLayout/><WorkoutPlan/></>}></Route>
  <Route path='trainerbmicalculator' element={<><TrainerLoginPageLayout/><BMICalculator/></>}></Route>
  <Route path='trainercaloriecounter' element={<><TrainerLoginPageLayout/><CalorieCounter/></>}></Route>
  </Route>

  <Route>
  <Route path='traineeePage' element={<><TraineeeLoginPageLayout/><TraineeProfile/></>}></Route>
  <Route path='traineeworkoutplan' element={<><TraineeeLoginPageLayout/><WorkoutPlan/></>}></Route>
  <Route path='traineedietplan' element={<><TraineeeLoginPageLayout/><DietPlan/></>}></Route>
  <Route path='traineebmicalculator' element={<><TraineeeLoginPageLayout/><BMICalculator/></>}></Route>
  <Route path='traineecaloriecounter' element={<><TraineeeLoginPageLayout/><CalorieCounter/></>}></Route>
  </Route>
  
</Routes>
</BrowserRouter>
    
    </div>
    </>

  );
}

// function ProtectedRouteAdmin({ children }) {
//   const adminSession = localStorage.getItem("owner");
//   console.log(adminSession);
//   // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
//   if (!adminSession) {
//     return <Navigate to="/login" replace={true} />;
//   }

//   return children;
// }


export default BasicExample;