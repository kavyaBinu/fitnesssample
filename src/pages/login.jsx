import React from 'react';
import loginimg from '../assets/Images/loginimg.jpg';

const LoginPage = () => {
  const styles = {
    page: {
        // background pic
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      backgroundImage: `url(${loginimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '40%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    logo: {
      fontSize: '2rem',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#777',
      marginBottom: '30px',
    },
    form: {
      marginBottom: '20px',
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '15px 0',
    },
    link: {
      fontSize: '0.9rem',
      color: '#007bff',
      textDecoration: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      background: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    register: {
      marginTop: '20px',
      fontSize: '0.9rem',
    },
    footer: {
      marginTop: '20px',
      fontSize: '0.8rem',
    },
  };

  return (
    <div style={styles.page} > 
      <div style={styles.container}>
        <h1 style={styles.logo}>Refit</h1>
        <p style={styles.subtitle}>Gym Management</p>
        <form style={styles.form}>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <a href="/forgot-password" style={styles.link}>Forgot password?</a>
          </div>
          <button type="submit" style={styles.button}>Log in</button>
        </form>
        <p style={styles.register}>
          Don't have an account? <a href="/Registration" style={styles.link}>Register</a>
        </p>
        <footer style={styles.footer}>
          <a href="/terms" style={styles.link}>Terms of Use</a> |{' '}
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;

