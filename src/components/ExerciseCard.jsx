import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={styles.card}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={styles.image} />
    <Stack direction="row" spacing={2} sx={styles.buttonContainer}>
      
      <Button sx={styles.bodyPartButton} type="button" class="btn btn-info" fdprocessedid="7ixzkt"> {exercise.bodyPart}</Button>

      <Button sx={styles.targetButton} type="button" class="btn btn-danger" fdprocessedid="ctxcph"> {exercise.target}</Button>
    </Stack>
    <Typography color='#87CEEB' ml="21px"  fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

const styles = {
  card: {
    display: 'block',
    width: '100%',
    maxWidth: '320px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Transparent white
    backdropFilter: 'blur(10px)',  // Blur effect for glass-like appearance
    borderRadius: '15px',
    overflow: 'hidden',
    textDecoration: 'none',
    position: 'relative',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',  // Slight scale effect on hover
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
  },
  buttonContainer: {
    marginTop: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  bodyPartButton: {
    ml: '21px',
    
    fontSize: '14px',
    borderRadius: '20px',
    textTransform: 'capitalize',
  },
  targetButton: {
    ml: '21px',
    
    
    fontSize: '14px',
    borderRadius: '20px',
    textTransform: 'capitalize',
  },
};

export default ExerciseCard;
