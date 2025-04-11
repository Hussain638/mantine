// import {
//   Box,
//   Text,
//   UnstyledButton,
//   useMantineTheme,
//   useMantineColorScheme,
//   Button,
//   Flex,
// } from '@mantine/core';
// import { IconLogout } from '@tabler/icons-react';
// import { useEffect, useState } from 'react';
// import useMenuStore from '../../store/useMenuStore';
// import menuConfig from "../../MenuConfig/MenuItems";
// import { useNavigate, useLocation } from 'react-router-dom';

// export default function ToggleSidebar({ open }) {
//   const theme = useMantineTheme();
//   const { colorScheme } = useMantineColorScheme();
//   const isDark = colorScheme === 'dark';

//   const { activeMenu,setActiveMenu, activeSubMenu, setActiveSubMenu } = useMenuStore();
//   const menuItems = menuConfig[activeMenu] || [];
//   const navigate = useNavigate();
//   const [defaultNavigation, setDefaultNavigation] = useState(true);

//   const [hoveredLabel, setHoveredLabel] = useState(null);
//   const location = useLocation();

//   const handleMenuClick = (label) => {
//     setDefaultNavigation(false);
//     setActiveSubMenu(label);
//     navigate(`/${label.toLowerCase()}`);
//   };
  
//   useEffect( ()=>{
//    navigate('/analytics');
//    setActiveSubMenu('Analytics')
//   },[]);

//     // 🔥 Dynamic Active Menu Setter based on URL
//     useEffect(() => {
//       const currentPath = location.pathname.toLowerCase().replace('/', '');
   
//       for (const [menuKey, items] of Object.entries(menuConfig)) {
//         const matchedItem = items.find(item =>
//           currentPath.includes(item.label.toLowerCase().replace(/\s+/g, '').replace(/-/g, ''))
//         );
   
//         if (matchedItem) {
//           setActiveMenu(menuKey);
//           setActiveSubMenu(matchedItem.label);
//           break;
//         }
//       }
//     }, [location.pathname]);

//   const getHoverBg = isDark ? "#E9ECEF" : theme.colors.gray[3];
//   const getActiveBg = isDark ? theme.colors.gray[2] : theme.colors.gray[3];
//   const getInactiveText = isDark ? theme.colors.gray[3] : theme.colors.dark[6];

//   return (
//     <Box
//       w={open ? "15vw" : 0}
//       h="100vh"
//       bg={isDark ? "rgb(40, 40, 44)" : "#FFFFFF"}
//       pos="fixed"
//       top={0}
//       left={70}
//       style={{
//         transition: 'width 0.3s ease',
//         overflow: 'hidden',
//         zIndex: 400,
//         borderRight: `1px solid ${isDark ? theme.colors.dark[4] : theme.colors.gray[3]}`,
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Menu section */}
//       <Box style={{ flexGrow: 1, overflowY: 'auto' }}>
//         {open && (
//           <Text
//             fw={600}
//             color={isDark ? theme.white : theme.black}
//             size="md"
//             mb="20px"
//             m="md"
//           >
//             {activeMenu}
//           </Text>
//         )}

//         {menuItems.map(({ label, icon: Icon }) => {
//           const isActive = activeSubMenu === label;
//           const isHovered = hoveredLabel === label;

//           const bgColor = isHovered ? getHoverBg : isActive ? getActiveBg : 'transparent';
//           const textColor = isHovered || isActive ? 'black' : getInactiveText;

//           return (
//             <UnstyledButton
//               key={label}
//               onClick={() => handleMenuClick(label)}
//               onMouseEnter={() => setHoveredLabel(label)}
//               onMouseLeave={() => setHoveredLabel(null)}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '80%',
//                 padding: '10px 12px',
//                 borderRadius: 6,
//                 marginBottom: 4,
//                 marginLeft: 20,
//                 height: 40,
//                 gap: 10,
//                 backgroundColor: bgColor,
//                 color: textColor,
//                 transition: 'all 0.2s ease',
//               }}
//             >
//               {open && (
//                 <>
//                   <Icon
//                     className="menu-icon"
//                     size={18}
//                     color={textColor}
//                     style={{ transition: 'color 0.2s ease' }}
//                     variant="Bold"
//                   />
//                   <Text size="sm">{label}</Text>
//                 </>
//               )}
//             </UnstyledButton>
//           );
//         })}
//       </Box>

//       {/* Footer section */}
//       <Flex
//         p={10}
//         bg={
//           colorScheme === "light"
//             ? "var(--mantine-color-gray-0)"
//             : "var(--mantine-color-gray-8)"
//         }
//         w="100%"
//         justify="space-between"
//         align="center"
//       >
//         <Flex direction="column" align="start">
//           <Text fz={14} fw={600}>
//             John
//           </Text>
//           <Text fz={12}>Jhon@gmail.com</Text>
//         </Flex>
//         <Button
//           m={0}
//           p={8}
//           variant="subtle"
//           color={colorScheme === "light" ? "black" : "gray"}
//         >
//           <IconLogout size={24} />
//         </Button>
//       </Flex>
//     </Box>
//   );
// }


import {
  Box,
  Text,
  UnstyledButton,
  useMantineTheme,
  useMantineColorScheme,
  Button,
  Flex,
} from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
 
import useMenuStore from '../../store/useMenuStore';
import menuConfig from "../../MenuConfig/MenuItems";
 
export default function ToggleSidebar({ open }) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
 
  const {
    activeMenu,
    activeSubMenu,
    setActiveMenu,
    setActiveSubMenu,
  } = useMenuStore();
 
  const menuItems = menuConfig[activeMenu] || [];
  const navigate = useNavigate();
  const location = useLocation();
 
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [defaultNavigation, setDefaultNavigation] = useState(true);
    const handleMenuClick = (label) => {
    setDefaultNavigation(false);
    setActiveSubMenu(label);  
    navigate(`/${label.toLowerCase().replace(/\s+/g, '')}`);
  };
 
  useEffect( ()=>{
   navigate('/analytics');
   setActiveSubMenu('Analytics')
  },[]);
 
  // 🔥 Dynamic Active Menu Setter based on URL
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase().replace('/', '');
 
    for (const [menuKey, items] of Object.entries(menuConfig)) {
      const matchedItem = items.find(item =>
        currentPath.includes(item.label.toLowerCase().replace(/\s+/g, '').replace(/-/g, ''))
      );
 
      if (matchedItem) {
        setActiveMenu(menuKey);
        setActiveSubMenu(matchedItem.label);
        break;
      }
    }
  }, [location.pathname]);
 
  const getHoverBg = isDark ? "#E9ECEF" : theme.colors.gray[3];
  const getActiveBg = isDark ? theme.colors.gray[2] : theme.colors.gray[3];
  const getInactiveText = isDark ? theme.colors.gray[3] : theme.colors.dark[6];
 
  return (
    <Box
      w={open ? 240 : 0}
      h="100vh"
      bg={isDark ? "rgb(40, 40, 44)" : "#FFFFFF"}
      pos="fixed"
      top={0}
      left="5vw"
      style={{
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        zIndex: 400,
        borderRight: `1px solid ${isDark ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Menu section */}
      <Box style={{ flexGrow: 1, overflowY: 'auto' }}>
        {open && (
          <Text
            fw={600}
            color={isDark ? theme.white : theme.black}
            size="md"
            mb="20px"
            m="md"
          >
            {activeMenu}
          </Text>
        )}
 
        {menuItems.map(({ label, icon: Icon }) => {
          const isActive = activeSubMenu === label;
          const isHovered = hoveredLabel === label;
 
          const bgColor = isHovered ? getHoverBg : isActive ? getActiveBg : 'transparent';
          const textColor = isHovered || isActive ? 'black' : getInactiveText;
 
          return (
            <UnstyledButton
              key={label}
              onClick={() => handleMenuClick(label)}
              onMouseEnter={() => setHoveredLabel(label)}
              onMouseLeave={() => setHoveredLabel(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '80%',
                padding: '10px 12px',
                borderRadius: 6,
                marginBottom: 4,
                marginLeft: 20,
                height: 40,
                gap: 10,
                backgroundColor: bgColor,
                color: textColor,
                transition: 'all 0.2s ease',
              }}
            >
              {open && (
                <>
                  <Icon
                    className="menu-icon"
                    size={18}
                    color={textColor}
                    style={{ transition: 'color 0.2s ease' }}
                    variant="Bold"
                  />
                  <Text size="sm">{label}</Text>
                </>
              )}
            </UnstyledButton>
          );
        })}
      </Box>
 
      {/* Footer section */}
      <Flex
        p={10}
        bg={
          colorScheme === "light"
            ? "var(--mantine-color-gray-0)"
            : "var(--mantine-color-gray-8)"
        }
        w="100%"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" align="start">
          <Text fz={14} fw={600}>
            John
          </Text>
          <Text fz={12}>Jhon@gmail.com</Text>
        </Flex>
        <Button
          m={0}
          p={8}
          variant="subtle"
          color={colorScheme === "light" ? "black" : "gray"}
        >
          <IconLogout size={24} />
        </Button>
      </Flex>
    </Box>
  );
}
 
 