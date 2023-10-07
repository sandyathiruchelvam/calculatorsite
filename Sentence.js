// Import React
import React from 'react';

// Define the styles for the container and content
const containerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
  backgroundImage: `url(/src/images/1.png)`, // Your background image URL
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  fontFamily: 'script',
  margin: 0, // Remove any margin
  padding: 0, // Remove any padding
};

const contentStyle = {
  textAlign: 'top', // There is no 'top' value for textAlign, you may want 'center' or 'left'
  color: 'white',
  fontWeight: 'bold',
  fontSize: '3rem',
  margin: 0, // Remove any margin
};

// Define the Sentence functional component
const Sentence = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p>Effortlessly calculation at your fingertips</p>
      </div>
    </div>
  );
};

// Export the Sentence component
export default Sentence;
