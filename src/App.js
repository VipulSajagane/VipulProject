// Vipuls project

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HealthDetails from './HealthDetails';
import WorkoutPlan from './WorkoutPlan';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
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
import  Sir from './Images/Sir.jpeg'
import Aboutus from './AboutUs';
import UpdateWorkoutPlan from './UpdateWorkoutPlan';
import WorkoutData from './WorkoutData';
import TraineeDataInTrainer from './TraineeDataInTrainer';
import TrainerUpdateTrainee from './TrainerUpdateTrainee';
import GymFooter from './GymFooter';




function BasicExample() {
  return (
   <>
  <div>
  <BrowserRouter>
    <Routes>
            <Route path='/' element={<><HomePage/><HomeSubComponent/><GymFooter/></>}>  </Route>
            <Route path='/home' element={<><HomePage/><HomeSubComponent/><GymFooter/></>}></Route>
            <Route path='aboutus' element={<><HomePage/><Aboutus/><GymFooter/></>}> </Route>
            <Route path='/trainee' element={<><HomePage/><Trainee/><GymFooter/></>}> </Route>
             <Route path='/trainer' element={<><HomePage/><TrainerForm/><GymFooter/></>}></Route>
                <Route path='login' element={<><HomePage/><Login/><GymFooter/></>}></Route>
                <Route path='/owner' element={<><HomePage/><Login/><GymFooter/></>}></Route>
                <Route path='healthdetails' element={<><HealthDetails/><GymFooter/></>}></Route>
                <Route path='workoutplan' element={<><WorkoutPlan/><GymFooter/></>}></Route>
                <Route path='paymentdetails' element={<><PaymentDetails/><GymFooter/></>}></Route>
                
            <Route path='/bmicalculator' element={<><HomePage/><BMICalculator/><GymFooter/></>}></Route>
                <Route path='caloriecounter' element={<><HomePage/><CalorieCounter/><GymFooter/></>}></Route>
                <Route path='membershipplan' element={<><HomePage/><MembershipPlan/><GymFooter/></>}></Route>  

                {/* <Route path='/logout' element={<Logout></Logout>}>  </Route> */}
      
       {/* Owner Perspective */}
       <Route>      
       <Route path='ownerpage' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><OwnerProfile/></ProtectedRouteOwner>}></Route>
      <Route path='traineedata/' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><TraineeData/></ProtectedRouteOwner>}></Route>
      <Route path='trainerdata' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><TrainerData/></ProtectedRouteOwner>}></Route>
       <Route path='ownerprofile' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><OwnerProfile/></ProtectedRouteOwner>}></Route>   
       <Route path='traineedata/updatetrainee' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><UpdateTrainee/></ProtectedRouteOwner>}></Route>
       <Route path='trainerdata/updatetrainer' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><UpdateTrainer/></ProtectedRouteOwner>}></Route>
      <Route path='ownerbmicalculator' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><BMICalculator/></ProtectedRouteOwner>}></Route>
      <Route path='ownercaloriecounter' element={<ProtectedRouteOwner><OwnerLoginPageLayout/><CalorieCounter/></ProtectedRouteOwner>}></Route>
   </Route>
 
  {/* Trainer Perspective */}
  <Route>
  {/* <Route path='HomePage' element={<><HomePage/></>}></Route>  */}
  <Route path='trainerpage' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><TrainerProfile/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='trainertraineedata/' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><TraineeDataInTrainer/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='/trainerupdatetrainee' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><TrainerUpdateTrainee/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='workoutdata' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><WorkoutData/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='workoutplan/' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><WorkoutPlan/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='trainertraineedata/workoutplan' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><UpdateWorkoutPlan/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='trainerbmicalculator' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><BMICalculator/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='trainercaloriecounter' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><CalorieCounter/><GymFooter/></ProtectedRouteTrainer>}></Route>
  <Route path='trainerworkoutplan' element={<ProtectedRouteTrainer><TrainerLoginPageLayout/><WorkoutData/><GymFooter/></ProtectedRouteTrainer>}></Route>
  </Route>

  <Route>
  <Route path='traineeePage' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><TraineeProfile/><GymFooter/></ProtectedRouteTrainee>}></Route>
  <Route path='traineeworkoutplan' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><WorkoutPlan/><GymFooter/></ProtectedRouteTrainee>}></Route>
  <Route path='healthdetails/' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><HealthDetails/><GymFooter/></ProtectedRouteTrainee>}></Route>
  <Route path='traineedietplan' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><DietPlan/><GymFooter/></ProtectedRouteTrainee>}></Route>
  <Route path='traineebmicalculator' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><BMICalculator/><GymFooter/></ProtectedRouteTrainee>}></Route>
  <Route path='traineecaloriecounter' element={<ProtectedRouteTrainee><TraineeeLoginPageLayout/><CalorieCounter/><GymFooter/></ProtectedRouteTrainee>}></Route>
  </Route>
  
</Routes>
</BrowserRouter>
    
    </div>
    </>

  );
}

function ProtectedRouteOwner({ children }) {
  const ownerSession = localStorage.getItem("status");
  console.log(ownerSession);
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (ownerSession=="valid") {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
 
}

function ProtectedRouteTrainee({ children }) {
  const traineeSession = localStorage.getItem("status");
  console.log(traineeSession);
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (traineeSession=="valid") {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}

function ProtectedRouteTrainer({ children }) {
  const trainerSession = localStorage.getItem("status");
  console.log(trainerSession);
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (trainerSession=="valid") {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}



export default BasicExample;