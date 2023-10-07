// Import necessary dependencies
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// Define the URL for the company logo
const logoUrl = 'https://www.vsolver.com/assets/title-logo-65533d2b.png';

// Define an array of calculator options
const calculatorOptions = [
  'Hours calc',
  'Workhours calc',
  'Timecard calc',
  'Timeclock',
  'Grosspay for hours calc',
  'Time calc',
  'sun rise & set calc',
  'days calc',
  'date+calendar calc',
  'date difference for days',
  'time & date difference calc',
  'age calc',
  'decimal to time calc',
  'time to decimal calc',
  'time units converter',
  'minutes to decimal hours',
  'minutes to hours and minutes',
  'military time converter',
  'military time charts',
];

// Define the SearchAppBar functional component
export default function SearchAppBar() {
  // State variables for search term and suggestions
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // Initialize the navigate function
  const navigate = useNavigate();

  // Handle input change in the search bar
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter calculator options based on input value
    const filteredSuggestions = calculatorOptions.filter((option) =>
      option.toLowerCase().includes(value)
    );

    setSuggestions(filteredSuggestions);
  };

  // Clear the suggestions
  const clearSuggestions = () => {
    setSuggestions([]);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    // Navigate to the corresponding calculator page when a suggestion is clicked
    const formattedSuggestion = suggestion.toLowerCase().replace(/\s/g, '-');
    navigate(`/${formattedSuggestion}`);
    setSearchTerm(''); // Clear the search input
    clearSuggestions(); // Clear suggestions
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '80px', backgroundColor: 'hsl(199, 58%, 52%);' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {/* Company Logo and Text */}
              <div className="logo-container">
                <img src={logoUrl} alt="Company Logo" className="logo-img" />
                <div className="text-logo">CALC</div>
              </div>
            </Typography>
          </Link>
          {/* Search Bar */}
          <div className="search">
            <div className="searchIconWrapper">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className="inputBase"
              style={{ color: 'black' }}
              value={searchTerm}
              onChange={handleInputChange}
            />
            {/* Display suggestions when available */}
            {suggestions.length > 0 && (
              <ul className="suggestions">
                <li>
                  <span className="close" onClick={clearSuggestions}>X</span>
                </li>
                {/* Map and display suggestion items */}
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
