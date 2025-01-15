import React from 'react';
import { Link } from 'react-router-dom';
import joinimg from '../assets/Images/joinimg.jpg';

const Coursess = () => {
  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw', // Ensures full width
      margin: 0,
      backgroundImage: `url(${joinimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Arial, sans-serif',
      paddingTop: '100px',
    },
    content: {
      color: 'white',
      textAlign: 'left',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      borderRadius: '10px',
      marginLeft: '100px',
      marginTop: '30px'
    },
    button: {
      textDecoration: 'none',
      color: 'white',
    },
  };

  return (
    <div style={styles.page}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Empty Column for layout purposes */}
          </div>
          <div className="col-lg-6">
            <div style={styles.content}>
              <h1>Get Ready To Reach <br /> Your Fitness Goals</h1>
              <h3>Join our Class through the following steps</h3>
              <p>
                Step 1: Make sure that you are registered on our website. If not, click here to register{' '}
                <Link to={'/signup'} style={styles.button}>
                  <button type="button" className="btn btn-danger">Register</button>
                </Link>
              </p>
              <p>
                Step 2: Drop a message on our WhatsApp number: *********, and send your payment screenshot.
                You will receive the group link. Make sure to follow the group for further updates.
              </p>
              <p>
                Step 3: Classes run from Monday to Saturday. Join according to the timing you selected during registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursess;
