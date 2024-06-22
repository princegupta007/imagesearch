import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImageDetails from './pages/ImageDetails';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ImageDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
