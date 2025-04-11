
import {
  Box,
  Stack,
  Tooltip,
  UnstyledButton,
  Avatar,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconLogout,
  IconBrandMantine,
} from '@tabler/icons-react';
import useMenuStore from '../../store/useMenuStore';
import {
  Box1,
  Chart,
  ClipboardText,
  CodeCircle,
  ColorSwatch,
  Colorfilter,
  DocumentText,
  Element4,
  Graph,
  Map1,
  ShoppingCart,
  Sort,
  Speedometer,
} from "iconsax-react";
import { useState } from 'react';

const sidebarItems = [
  { icon: Box1, label: 'Dashboard' },
  { icon: Speedometer, label: 'Ecommerce' },
  { icon: Colorfilter, label: 'Colorfilter' },
  { icon: DocumentText, label: 'DocumentText' },
  { icon: Element4, label: 'Element4' },
  { icon: Graph, label: 'Graph' },
  { icon: Speedometer, label: 'Speedometer' },
  { icon: Map1, label: 'Map1' },
  { icon: CodeCircle, label: 'Settings' },
  { icon: Sort, label: 'Sort' },
  { icon: DocumentText, label: 'Alco' },
];

export default function FixedSidebar() {

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const backgroundColor = isDark ? "rgb(40, 40, 44)" :"#FFFFFF";
  const borderColor = isDark ? theme.colors.dark[3] : theme.colors.gray[6];
  const iconColor = "black"; // On hover
  const inactiveColor = isDark ? '#d9e3f0' : '#495057';

  const { activeMenu, setActiveMenu, setActiveSubMenu } = useMenuStore();

  // Track which item is hovered
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Box
      w="5vw"
      h="100vh"
      pos="fixed"
      top={0}
      left={0}
      style={{
        borderRight: `1px dashed ${borderColor}`,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor,
        overflowY: "auto"
      }}
    >

      {/* Top: Logo + Navigation */}
      <Stack spacing="md" align="center">
        <IconBrandMantine size={35} color={isDark ? "#fff" : "black"} style={{ marginTop: "10px" }} />

        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.label;
          const isHovered = hoveredItem === item.label;

          return (
            <Tooltip key={item.label} label={item.label} position="right" withArrow>
              <UnstyledButton
                onClick={() => {
                  setActiveMenu(item.label);
                  setActiveSubMenu('');
                }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  backgroundColor: isHovered
                    ? isDark
                      ? "#E9ECEF"
                      : theme.colors.gray[4]
                    : isActive
                      ? isDark
                        ? "#E9ECEF"
                        : theme.colors.gray[6]
                      : 'transparent',
                  color: isHovered
                    ? iconColor
                    : isActive
                      ? iconColor
                      : inactiveColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: 'background-color 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <Icon
                  className="menu-icon"
                  size={24}
                  variant="Bold"
                  color={isHovered ? iconColor : isActive ? iconColor : inactiveColor}
                />
              </UnstyledButton>
            </Tooltip>
          );
        })}
      </Stack>

      {/* Bottom: Logout */}
      <Stack spacing="md" align="center">
        <Avatar
          radius="xl"
          size="md"
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="User"
        />
      </Stack>
    </Box>
  );
}
