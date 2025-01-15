import React from "react";
import service1 from '../assets/Images/service1.jpg'
import service2 from '../assets/Images/service2.jpg'
import service3 from '../assets/Images/service3.jpg'


const Servicessss = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
    {/* 1st row*/}
    <div className='row align-item-center'>
      <div className="row-lg-6">
        <h1 style={{color:'#EE82EE'}}>Your Success is <br /> our fitness commitment </h1>
        <h5 style={{color:'#87CEEB'}}>along with our trainers we provide some services <br /> which can be seen below ..</h5>

        <img src={service1} alt="no img" />
       

      </div>
     <div className="col">

     </div>
      {/* landing imaage*/}
      <div className="col-lg-6">
        <img style={{marginTop: '-630px'}} src={service2} alt="" />
      </div>
      
    </div>

    

    {/* feature part*/}
    <div className='my-5 row align-items-center p-1'> 
     <div className='col-lg-6'>
      <img style={{width: '600px', height:'600px'}} src={service3} alt="" />
     </div>
     
     <div className='col-lg-6'>
 
          <h1 style={{color:'#EE82EE'}}>What we offer</h1>
         <div>
          <h4 style={{color:'#87CEEB'}}>Personal Training</h4>
          <h5 style={{color:'#fff'}}>acheive your fitness goals with one-on-one training  sessions tailored just for you.</h5>
          </div>

          <div>
          <h4 style={{color:'#87CEEB'}}>Group Fitness Classes</h4>
          <h5 style={{color:'#fff'}}>Join our dynamic group classes to stay motivated and have fun while working out.</h5>
          </div>

          <div>
          <h4 style={{color:'#87CEEB'}}>Yoga Sessions</h4>
          <h5 style={{color:'#fff'}}>Improve your flexibility and mental health with our relaxing yoga classes.</h5>
          </div>

          <div>
          <h4 style={{color:'#87CEEB'}}>Cardio Workout</h4>
          <h5 style={{color:'#fff'}}>Stay fit and burn calories with our range of high-energy cardio machines.
           </h5>
          </div>

          <div>
          <h4 style={{color:'#87CEEB'}}>Strength Training"</h4>
          <h5 style={{color:'#fff'}}>Build your strength and endurance with state-of-the-art equipment and guidance.</h5>
          </div>

          
   </div>
   </div>
   </div>

)
}

export default Servicessss;
