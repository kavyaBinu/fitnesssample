
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Box} from "@mui/material"
import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FAQs from './pages/FAQs'
import Footer from './components/Footer'
import Servicessss from './pages/Servicessss'
import SignUp from './pages/Signup'
import Login from './pages/login'
import TrainersDescriptionPage from './pages/trainerdescription'
import Coursess from './pages/Coursess'
import GymRegistrationForm from './pages/Registration'


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />



function App() {
  

  return (
    <>
    
      
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto" > 
         
         
         <Navbar/>

      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetails/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/servicessss' element={<Servicessss/>} />
       <Route path='/signup' element={<SignUp/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/trainerdescription' element={<TrainersDescriptionPage/>} />
       <Route path='/Registration' element={<GymRegistrationForm/>} />
       <Route path='/Coursess' element={<Coursess/>} />

      </Routes> 
     </Box> 

     {/* Footer */}
         <Footer/>
    </>
  )
}



export default App
