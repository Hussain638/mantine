import { useState } from 'react';
import { Box, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import FixedSidebar from './FixedSidebar';
import ToggleSidebar from './ToggleSidebar';
import TopNavbar from './TopNavbar';
import { Outlet } from 'react-router-dom';

export default function LayoutWrapper() {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: isToggleOpen ? '280px 1fr' : '60px 1fr',
        gridTemplateRows: '60px 1fr',
        height: '100vh',
        transition: 'grid-template-columns 0.3s ease',
        backgroundColor: isDark ? '#1A1B1E' : '#EEF1F9',
      }}
    >
      {/* Sidebar */}
      <Box
        style={{
          gridRow: '1 / span 2',
          gridColumn: '1 / 2',
          overflow: 'hidden',
        }}
      >
        <FixedSidebar />
        <ToggleSidebar open={isToggleOpen} />
      </Box>

      {/* Top Navbar */}
      <Box style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>
        <TopNavbar isToggleOpen={isToggleOpen} setIsToggleOpen={setIsToggleOpen} />
      </Box>

      {/* Main Content */}
      <Box left={70}
        style={{
          gridColumn: '2 / 3',
          gridRow: '2 / 3',
          padding: theme.spacing.md,
          overflowY: 'auto',
          marginLeft:"6px"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
