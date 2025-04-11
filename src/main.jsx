import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme, localStorageColorSchemeManager } from '@mantine/core';
import App from './App';
import { DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
 
 
// ✅ Color scheme manager setup
const colorSchemeManager = localStorageColorSchemeManager({
  key: 'mantine-color-scheme',           // localStorage key
  defaultValue: 'light',                 // fallback if none set
  getInitialValueInEffect: true,         // allow reading from system preference on first load
});
 
const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'blue',
  // No need to hardcode colorScheme, Mantine handles it now
});
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
      colorSchemeManager={colorSchemeManager} // ✅ use correct manager
    >
      <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0 }}>
      <App />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
 