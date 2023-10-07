// Import React and necessary components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';
import AgeCalculator from './AgeCalculator'; // Import your AgeCalculator component
import Sentence from './Sentence';
import Menu from './Menu';

// Define the main App component
function App() {
  return (
    // Set up the React Router using BrowserRouter
    <Router>
      <div>
        {/* Include the Appbar component */}
        <Appbar />

        {/* Define the routes using the Routes component */}
        <Routes>
          {/* ... (other routes) */}

          {/* Route for a dynamic calculator option */}
          <Route
            path="/:calculatorOption" // Dynamic route parameter
            element={<AgeCalculator />} // Render the AgeCalculator component
          />

          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                {/* Render the Sentence and Menu components */}
                <Sentence />
                <Menu />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component
export default App;
