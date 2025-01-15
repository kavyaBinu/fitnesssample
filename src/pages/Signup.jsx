import React, { useState } from 'react';
import signupimg from '../assets/Images/loginimg.jpg'; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Signup successful!');
    
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
     
    }
  };

  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      backgroundImage: `url(${signupimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '40%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
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
    loginLink: {
      marginTop: '20px',
      fontSize: '0.9rem',
    },
    footer: {
      marginTop: '20px',
      fontSize: '0.8rem',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Refit</h1>
        <p style={styles.subtitle}>Create Your Account</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p style={styles.loginLink}>
          Already have an account? <a href="/login" style={styles.link}>Log in</a>
        </p>
        <footer style={styles.footer}>
          <a href="/terms" style={styles.link}>Terms of Use</a> |{' '}
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;


