import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme, localStorageColorSchemeManager } from '@mantine/core';
import App from './App';
import { DatesProvider } from '@mantine/dates';
import dayjs from 'dayjs';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
 
const colorSchemeManager = localStorageColorSchemeManager({
  key: 'mantine-color-scheme',        
  defaultValue: 'light',             
  getInitialValueInEffect: true,         
});
 
const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'blue',
});
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
      colorSchemeManager={colorSchemeManager} 
    >
      <DatesProvider settings={{ locale: 'en', firstDayOfWeek: 0 }}>
      <App />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
 