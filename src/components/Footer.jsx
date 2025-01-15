import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'300px'}} className=' p-3 border rounded mt-5 mb-4 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro*/}
        <div className='d-flex flex-column' style={{color:'white',width:'400px'}}>
          <h5>
          Refit</h5>
         <p style={{color:'white'}} >At Refit, we believe in transforming lives through fitness. Whether you're a beginner or an advanced athlete, our expert trainers and state-of-the-art equipment are here to help you achieve your goals. Join us to experience a personalized fitness journey tailored to your needs. Your success is our commitment!</p>
        </div>
        
        {/*links */}
        <div style={{color:'white'}} className='d-flex flex-column'>
          <h5>About</h5>
          <Link to={'/servicessss'} style={{textDecoration:'none', color:'white'}}>Services</Link>
          
          <Link to={'/trainerdescription'} style={{textDecoration:'none', color:'white'}}>Our Trainer</Link>
        </div>

        { /* guides*/}
        <div style={{color:'white'}} className='d-flex flex-column'>
          <h5>Join</h5>
          <Link to={'/Coursess'} style={{textDecoration:'none', color:'white'}}>Class</Link>
        
        
        <Link to={'/Registration'} style={{textDecoration:'none', color:'white'}}>Registration Form</Link>
        </div>
        {/*contact */}
        <div style={{color:'white'}} className='d-flex flex-column'>
          <h5>Contacts</h5>
       

        <div className='d-flex'>
          <input type="text" placeholder='Enter your Email here..' className='form-control me-2' />
          <button  className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div className='d-flex justify-content-between mt-3'>
          <a href="https://x.com/?lang=en&mx=2" style={{textDecoration:'none', color:'white'}} target='blank' >
          <i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/#" style={{textDecoration:'none', color:'white'}} target='blank'><i class="fa-brands fa-instagram"></i></a>
          <a href="https://en.wikipedia.org/wiki/Facebook" style={{textDecoration:'none', color:'white'}} target='blank'><i class="fa-brands fa-facebook"></i></a>
          <a href="https://en.wikipedia.org/wiki/LinkedIn" style={{textDecoration:'none', color:'white'}} target='blank'><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://en.wikipedia.org/wiki/Github" style={{textDecoration:'none', color:'white'}} target='blank'><i class="fa-brands fa-github"></i></a>
          <a href="https://en.wikipedia.org/wiki/Telephone" style={{textDecoration:'none', color:'white'}} target='blank'><i class="fa-solid fa-phone"></i></a>
        </div>
        </div> 
      </div>
      <div>
        <p className='text-center mt-3'>Copyright &copy; Jan 2021 Refit, all rights reserved. Powered by MocCreative.</p>
      </div>
    </div>
  )
}

export default Footer