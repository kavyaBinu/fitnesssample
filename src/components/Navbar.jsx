import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


import logonew from '../assets/Images/logonew.png'

const Navbar = () => {
  return (
    <>
    <Stack marginTop='0' direction={{ xs: 'column', sm: 'row'}} justifyContent='space-between' alignItems='center'
     sx={{gap: { sm: '122px', xs: '20px' }, 
    mt: { sm:'32px', xs: '20px'}}}>
        
      <Link to={'/'}>

      {/* ---------LOGOOOOOO--------- */}
      <img src={logonew} alt="NO IMG" style={{width: '100px', height:'50px', margin:'0', maxWidth: '100%'}}/>
      </Link>

      <Stack direction={{xs: 'column', sm: 'row'}}  alignItems='center' 
      gap='20px'
      fontSize={{ xs: '18px', sm: '24px'}} >
        <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color:'white'}}>Exercises</a>
        
        <Link to={'/Coursess'} style={{textDecoration: 'none', color: 'white'}}>Class</Link>
        
        <Link to={'/faq'} style={{textDecoration: 'none', color: 'white'}}>FAQs</Link>
        <Link to={'/servicessss'} style={{textDecoration: 'none', color: 'white'}}>Services</Link>
        <Link to={'/Registration'} style={{textDecoration: 'none', color: 'white'}}>Registration Form</Link>
        <Link to={'/login'} style={{textDecoration: 'none', color: 'white'}}><button type="button" class="btn btn-outline-danger" fdprocessedid="h5u93r">Login</button></Link>
        <Link to={'/signup'} style={{textDecoration: 'none', color: 'white'}}><button type="button" class="btn btn-danger" fdprocessedid="6ppx9a">Signup</button></Link>
        
      </Stack>
      </Stack>

      
      </>
  )
}

export default Navbar