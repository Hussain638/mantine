// import { Card, Grid, Text, ThemeIcon, Group, Box, rem ,useMantineColorScheme} from '@mantine/core';
// import {
//   IconShoppingCart,
//   IconFileAnalytics,
//   IconRosetteDiscountCheckFilled,
//   IconAlertCircleFilled,
//   IconTrendingUp
// } from '@tabler/icons-react';
 
//   const { colorScheme } = useMantineColorScheme();
//   const isDark = colorScheme === 'dark';

// // Card content config
// const cardData = [
//   {
//     title: 'Top Sale',
//     value: '561,212',
//     icon: IconShoppingCart,
//     bg: '#6D28D9',
//     circle1: '#8B5CF6',
//     circle2: '#C4B5FD',
//   },
//   {
//     title: 'Today Orders',
//     value: '536,233',
//     icon: IconFileAnalytics,
//     bg: '#F97316',
//     circle1: '#FDBA74',
//     circle2: '#FED7AA',
//   },
//   {
//     title: 'Completed Orders',
//     value: '2,341',
//     icon: IconRosetteDiscountCheckFilled,
//     bg: '#22C55E',
//     circle1: '#86EFAC',
//     circle2: '#BBF7D0',
//   },
//   {
//     title: 'Pending Order',
//     value: '33,234',
//     icon: IconAlertCircleFilled,
//     bg: '#EF4444',
//     circle1: '#FCA5A5',
//     circle2: '#FECACA',
//   },
// ];
 
// // Top right circle overlay component
// const CardOverlay = ({ color, size, top, right, opacity }) => (
//   <Box
//     style={{
//       position: 'absolute',
//       width: size,
//       height: size,
//       borderRadius: '50%',
//       backgroundColor: color,
//       top,
//       right,
//       opacity,
//     }}
//   />
// );
 
// // Individual dashboard card
// const DashboardCard = ({ title, value, IconComponent, bg, circle1, circle2 }) => (
//   <Card
//     radius="md"
//     padding="lg"
//     style={{
//       backgroundColor: bg,
//       color: 'white',
//       position: 'relative',
//       overflow: 'hidden',
//       height: rem(140),
//     }}
//     shadow="md"
//   >
//     {/* Background gradient circles */}
//     <CardOverlay color={circle1} size={140} top={-70} right={-70} opacity={0.4} />
//     <CardOverlay color={circle2} size={100} top={-55} right={-55} opacity={0.4} />
 
//     {/* Icon in dashed circle */}
//     <Box
//       style={{
//         display: 'flex',
//         width: 35,
//         height: 35,
//         justifyContent: 'center',
//         alignItems: 'center',
//         border: '1px dashed white',
//         borderRadius: '50%',
//       }}
//     >
//       <ThemeIcon
//         variant="light"
//         radius="lg"
//         size="lg"
//         style={{
//           backgroundColor: 'rgba(255,255,255,0.1)',
//           color: 'white',
//         }}
//       >
//         <IconComponent size={20} />
//       </ThemeIcon>
//     </Box>
 
//     {/* Title & value */}
//     <Text weight={600} mt="md" size="md">
//       {title}
//     </Text>
 
//     <Group mt={6} spacing="xs">
//       <Text size="lg" weight={700}>
//         {value}
//       </Text>
//       <IconTrendingUp size={20} />
//     </Group>
//   </Card>
// );
 
// // Dashboard card grid layout
// const StatsCard = () => (
//   <Grid gutter="sm" style={{padding:"20px" , background: isDark ? "#1E1E2F" : "white"}}>
//     {cardData.map((card, idx) => (
//       <Grid.Col key={idx} span={3} xs={12} sm={3} md={3}>
//         <DashboardCard
//           title={card.title}
//           value={card.value}
//           IconComponent={card.icon}
//           bg={card.bg}
//           circle1={card.circle1}
//           circle2={card.circle2}
//         />
//       </Grid.Col>
//     ))}
//   </Grid>
// );
 
// export default StatsCard;

import {
    Card,
    Grid,
    Text,
    ThemeIcon,
    Group,
    Box,
    rem,
    useMantineColorScheme,
  } from '@mantine/core';
  import {
    IconShoppingCart,
    IconFileAnalytics,
    IconRosetteDiscountCheckFilled,
    IconAlertCircleFilled,
    IconTrendingUp,
  } from '@tabler/icons-react';
  
  // Card content config
  const cardData = [
    {
      title: 'Top Sale',
      value: '561,212',
      icon: IconShoppingCart,
      bg: '#6D28D9',
      circle1: '#8B5CF6',
      circle2: '#C4B5FD',
    },
    {
      title: 'Today Orders',
      value: '536,233',
      icon: IconFileAnalytics,
      bg: '#F97316',
      circle1: '#FDBA74',
      circle2: '#FED7AA',
    },
    {
      title: 'Completed Orders',
      value: '2,341',
      icon: IconRosetteDiscountCheckFilled,
      bg: '#22C55E',
      circle1: '#86EFAC',
      circle2: '#BBF7D0',
    },
    {
      title: 'Pending Order',
      value: '33,234',
      icon: IconAlertCircleFilled,
      bg: '#EF4444',
      circle1: '#FCA5A5',
      circle2: '#FECACA',
    },
  ];
  
  // Top right circle overlay component
  const CardOverlay = ({ color, size, top, right, opacity }) => (
    <Box
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        top,
        right,
        opacity,
      }}
    />
  );
  
  // Individual dashboard card
  const DashboardCard = ({ title, value, IconComponent, bg, circle1, circle2 }) => (
    <Card
      radius="md"
      padding="lg"
      style={{
        backgroundColor: bg,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        height: rem(140),
      }}
      shadow="md"
    >
      {/* Background gradient circles */}
      <CardOverlay color={circle1} size={140} top={-70} right={-70} opacity={0.4} />
      <CardOverlay color={circle2} size={100} top={-55} right={-55} opacity={0.4} />
  
      {/* Icon in dashed circle */}
      <Box
        style={{
          display: 'flex',
          width: 35,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px dashed white',
          borderRadius: '50%',
        }}
      >
        <ThemeIcon
          variant="light"
          radius="lg"
          size="lg"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'white',
          }}
        >
          <IconComponent size={20} />
        </ThemeIcon>
      </Box>
  
      {/* Title & value */}
      <Text weight={600} mt="md" size="md">
        {title}
      </Text>
  
      <Group mt={6} spacing="xs">
        <Text size="lg" weight={700}>
          {value}
        </Text>
        <IconTrendingUp size={20} />
      </Group>
    </Card>
  );
  
  // Dashboard card grid layout
  const StatsCard = () => {
    const { colorScheme } = useMantineColorScheme(); // ✅ hook inside component
    const isDark = colorScheme === 'dark';
  
    return (
      <Grid gutter="sm" style={{ padding: '20px', background: isDark ? '#1E1E2F' : 'white' }}>
        {cardData.map((card, idx) => (
          <Grid.Col key={idx} span={3} xs={12} sm={3} md={3}>
            <DashboardCard
              title={card.title}
              value={card.value}
              IconComponent={card.icon}
              bg={card.bg}
              circle1={card.circle1}
              circle2={card.circle2}
            />
          </Grid.Col>
        ))}
      </Grid>
    );
  };
  
  export default StatsCard;
  