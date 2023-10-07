// Import React and necessary components
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Import your custom CSS file
import './App.css';

// Define the AgeCalculator functional component
const AgeCalculator = () => {
  // State variables for birthDate, currentDate, and age
  const [birthDate, setBirthDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [age, setAge] = useState('');

  // Function to calculate the age
  const calculateAge = () => {
    // Convert birthDate and currentDate to Date objects
    const birthDateObj = new Date(birthDate);
    const currentDateObj = new Date(currentDate);

    // Calculate the age in milliseconds and years
    const ageInMilliseconds = currentDateObj - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    // Set the calculated age in state
    setAge(Math.floor(ageInYears));
  };

  // Return the JSX for the AgeCalculator component
  return (
    <div className="age-calculator-container">
      {/* Display the title */}
      <h1 className='title-text' style={{ color: 'white',fontSize: '3rem', fontFamily: 'script' }}>In just a click, your age will stick</h1>

      {/* Input for Birth Date */}
      <div className="label-input-container">
      <h1 style={{ color: 'white', fontFamily: 'script' }}>Birth Date:</h1>
        <TextField
          className="birth-date-box"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>

      {/* Input for Current Date */}
      <div className="label-input-container">
      <h1 style={{ color: 'white', fontFamily: 'script' }}>Current Date:</h1>
        <TextField
          className="current-date-box"
          type="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
      </div>

      {/* Gap */}
      <div style={{ height: '15px' }}></div>

      {/* Calculate Age Button */}
      <Button
        className="age-calculator-button"
        variant="contained"
        onClick={calculateAge}
      >
        Calc the Age
      </Button>

      {/* Gap */}
      <div style={{ height: '15px' }}></div>

      {/* Display Age if it's calculated */}
      {age !== '' && <h1 className="result-text">Your age is: {age} years</h1>}
    </div>
  );
};

// Export the AgeCalculator component
export default AgeCalculator;
