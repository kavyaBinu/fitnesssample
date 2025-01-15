import React, { useState } from 'react';

const GymRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    personalTrainer: false,
    categories: [],
    feeStructure: '',
    nutritionNeeded: false,
    healthIssues: '',
    classType: '',
    paymentMethod: 'UPI',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === 'categories') {
      const updatedCategories = checked
        ? [...formData.categories, value]
        : formData.categories.filter((item) => item !== value);
      setFormData({
        ...formData,
        categories: updatedCategories,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit the form data to a backend API or process it further
    alert('Registration successful!'); // Alert message after form submission
  };

  return (
    <div style={{ width: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2 style={{ color:'#87CEEB', textAlign: 'center', marginBottom: '20px' }}>Register here</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          <input
            type="checkbox"
            name="personalTrainer"
            checked={formData.personalTrainer}
            onChange={handleChange}
          />
          I would like a personal trainer
        </label>

        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Fitness Categories:</h4>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="Weight Gain"
              checked={formData.categories.includes('Weight Gain')}
              onChange={handleChange}
            />
            Weight Gain
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="Weight Loss"
              checked={formData.categories.includes('Weight Loss')}
              onChange={handleChange}
            />
            Weight Loss
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="Yoga"
              checked={formData.categories.includes('Yoga')}
              onChange={handleChange}
            />
            Yoga
          </label>
          <label>
            <input
              type="checkbox"
              name="categories"
              value="Cardio"
              checked={formData.categories.includes('Cardio')}
              onChange={handleChange}
            />
            Cardio Workouts
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Fee Structure:</h4>
          <label>
            <input
              type="radio"
              name="feeStructure"
              value="Monthly"
              checked={formData.feeStructure === 'Monthly'}
              onChange={handleChange}
            />
            Monthly
          </label>
          <label>
            <input
              type="radio"
              name="feeStructure"
              value="Yearly"
              checked={formData.feeStructure === 'Yearly'}
              onChange={handleChange}
            />
            Yearly
          </label>
        </div>

        <label style={{ marginBottom: '15px' }}>
          <input
            type="checkbox"
            name="nutritionNeeded"
            checked={formData.nutritionNeeded}
            onChange={handleChange}
          />
          I need nutrition advice
        </label>

        <input
          type="text"
          name="healthIssues"
          placeholder="Health Issues (if any)"
          value={formData.healthIssues}
          onChange={handleChange}
          style={{
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Class Type:</h4>
          <label>
            <input
              type="radio"
              name="classType"
              value="Online"
              checked={formData.classType === 'Online'}
              onChange={handleChange}
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="classType"
              value="Offline"
              checked={formData.classType === 'Offline'}
              onChange={handleChange}
            />
            Offline
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Payment Method:</h4>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              checked={formData.paymentMethod === 'UPI'}
              onChange={handleChange}
            />
            UPI
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default GymRegistrationForm;


