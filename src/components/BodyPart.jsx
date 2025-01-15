
import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    direction="row"
    flexWrap="wrap"
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      // Card-like design
      borderRadius: '12px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '20px',
      margin: '10px',
      padding: '20px',
       
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow for the card effect
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)', 
      },
      ...(bodyPart === item && {
        borderBottomLeftRadius: '20px',
        borderColor: '#EE82EE', // Highlight border color when selected
        borderStyle: 'solid',
        borderWidth: '2px',
      }),
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="gym icon" style={{ width: '40px', height: '40px' }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#EE82EE"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
