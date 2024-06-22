import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      label="Search Images"
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      margin="normal"
    />
  );
};

export default SearchBar;
