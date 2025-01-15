import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
Button
import girlimg from '../assets/Images/girlimg.jpeg'
const HeroBanner = () => {
  return (
    <Box
       sx={{ mt: {lg: '10px', xs: '70px' }, 
   ml: { sm: '50px'}, p: { xs: '10px', sm: '20px'},position:'relative'}}
   >
     

     <Typography color='#EE82EE' fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '32px' }, lineHeight: { xs: '40px', sm: '50px'}}} mb='23px' mt='30px'>
        Shape Your <br /> <span>Perfect Body</span>
     </Typography>

     <Typography color='#87CEEB' fontSize={{ xs: '18px', sm: '22px'}} lineHeight='35px' mb={4}>
        Check out the most effective Exercises
     </Typography>

     <button type="button" className='btn btn-danger' fdprocessedid="vkbny">Explore Exercises</button>

     <Typography fontweight={600}
        color='#ff2625'
        sx={{ opacity: 0.1, display:{ lg: 'block', xs: 'none'
        }}} fontSize={'200px'}>Exercises
        
     </Typography>
    {/*pic of girl */}
     <Box
       component="img"
       src={girlimg}
       alt="no img"
       className="hero-banner-img"
       sx={{
         paddingRight: '0px',
         width: { xs: '100%', sm: '80%' }, height: { lg:660} ,
         position: 'absolute',
         right: { xs: '0', sm: '40px' },
         top: { xs: '150px', sm: '0' }, // Adjust image position based on screen size
       }}
     />
    
   </Box>    
)
}

export default HeroBanner