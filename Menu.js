// Import necessary dependencies
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import './App.css'; // Import a CSS file for custom styling

// Define the Menu functional component
export default function Menu() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle menu item click
  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click, you can add more logic here for other items
    navigate(`/${menuItem.replace(/\s/g, '-').toLowerCase()}`);
  };

  return (
    <div className="menu-container">
      {/* Autocomplete for Timecalc options */}
      <div className="custom-autocomplete1">
        <Autocomplete
          disablePortal
          id="combo-box-demo-1"
          options={Timecalc.map((option) => option.label)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Timecalc" />}
          onChange={(event, value) => handleMenuItemClick(value)}
        />
      </div>

      {/* Autocomplete for Datecalc options */}
      <div className="custom-autocomplete2">
        <Autocomplete
          disablePortal
          id="combo-box-demo-2"
          options={Datecalc.map((option) => option.label)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Datecalc" />}
          onChange={(event, value) => handleMenuItemClick(value)}
        />
      </div>

      {/* Autocomplete for Timeconversions options */}
      <div className="custom-autocomplete3">
        <Autocomplete
          disablePortal
          id="combo-box-demo-3"
          options={Timeconversions.map((option) => option.label)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Timeconversions" />}
          onChange={(event, value) => handleMenuItemClick(value)}
        />
      </div>
    </div>
  );
}

// Define arrays for menu options
const Timecalc = [
  { label: 'Hours calc' },
  { label: 'Workhours calc' },
  { label: 'Timecard calc' },
  { label: 'Timeclock' },
  { label: 'Grosspay for hours calc' },
  { label: 'Time calc' },
  { label: 'Sunrise & set calc' },
];

const Datecalc = [
  { label: 'Days calc' },
  { label: 'Date+calendar calc' },
  { label: 'Date difference for days' },
  { label: 'Time & date difference calc' },
  { label: 'Age calc' },
];

const Timeconversions = [
  { label: 'Decimal to time calc' },
  { label: 'Time to decimal calc' },
  { label: 'Time units converter' },
  { label: 'Minutes to decimal hours' },
  { label: 'Minutes to hours and minutes' },
  { label: 'Military time converter' },
  { label: 'Military time charts' },
];
