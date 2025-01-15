import React from 'react';
import trainer1 from '../assets/Images/trainer1.avif'
import trainer2 from '../assets/Images/trainer2.jpg'
import yogatrainer from '../assets/Images/yogatrainer.avif'
import yogatrainerboy from '../assets/Images/yogatrainerboy.avif'
import strengthtrainer2  from '../assets/Images/strengthtrainer2.avif'
import nutrionist from '../assets/Images/nutrionist.avif'
const trainers = [
  {
    id: 1,
    name: 'John Doe',
    specialization: 'Strength Training & Conditioning',
    experience: '10 years',
    description: `John Doe has over a decade of experience in the fitness industry, specializing in strength training and conditioning. 
    He has worked with professional athletes, helping them enhance their performance through personalized training programs. 
    John is dedicated to teaching the proper techniques to avoid injury while maximizing results. Whether you're looking to build muscle, 
    improve athletic performance, or increase overall strength, John provides tailored solutions to meet your goals.`,
    image: trainer1, // Replace with the path to the trainer's image
  },
  {
    id: 2,
    name: 'Jaan Smith',
    specialization: 'Yoga & Flexibility',
    experience: '8 years',
    description: `Jane Smith is a certified yoga instructor with a strong focus on flexibility and mindfulness. 
    With eight years of experience, she has guided clients through stress-relief practices, improved posture, and enhanced flexibility. 
    Jane offers a variety of yoga styles, including Hatha, Vinyasa, and Yin Yoga, catering to beginners and advanced practitioners. 
    Her sessions provide a perfect balance of physical fitness and mental clarity, ensuring a holistic approach to well-being.`,
    image: yogatrainer,
  },
  {
    id: 3,
    name: 'Liya Johnson',
    specialization: 'Cardio & Weight Loss',
    experience: '6 years',
    description: `Mike Johnson is an experienced trainer who specializes in cardio fitness and weight loss programs. 
    Over the past six years, he has helped hundreds of clients achieve their fitness goals through dynamic and engaging cardio sessions. 
    Mike combines HIIT, circuit training, and endurance exercises to create personalized plans for sustainable weight loss and improved 
    cardiovascular health. His motivational approach ensures that clients stay committed and see tangible results.`,
    image: trainer2,
  },
];

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  trainerCard: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#000',
  },
  specialization: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  },
  experience: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
  },
};

const TrainersDescriptionPage = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Meet Our Trainers</h1>
      {trainers.map((trainer) => (
        <div key={trainer.id} style={styles.trainerCard}>
          <img src={trainer.image} alt={trainer.name} style={styles.image} />
          <div style={styles.content}>
            <h2 style={styles.name}>{trainer.name}</h2>
            <p style={styles.specialization}>Specialization: {trainer.specialization}</p>
            <p style={styles.experience}>Experience: {trainer.experience}</p>
            <p style={styles.description}>{trainer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersDescriptionPage;
