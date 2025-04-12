import React from 'react';
import {
  Grid,
  Card,
  Text,
  Flex,
  ThemeIcon,
  Container,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import {
  IconEye,
  IconChartPie,
  IconClick,
  IconShoppingCart,
} from '@tabler/icons-react';
import { DonutChart } from '@mantine/charts';
 
const stats = [
  {
    title: 'Sessions',
    value: '6,132',
    percentage: '+150%',
    icon: IconEye,
    color: 'teal',
  },
  {
    title: 'Page Views',
    value: '11,236',
    percentage: '+202%',
    icon: IconChartPie,
    color: 'red',
  },
  {
    title: 'Average',
    value: '46',
    percentage: '+22%',
    icon: IconClick,
    color: 'lime',
  },
  {
    title: 'Bounce Rate',
    value: '6,132',
    percentage: '-30%',
    icon: IconShoppingCart,
    color: 'pink',
  },
];
 
function StatCard({ title, value, percentage, icon: Icon, color }) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
 
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      p="md"
      h="100%"
      style={{ position: 'relative', background: isDark ? '#25262B' : '#FFFFFF' }}
    >
      <Flex direction="column" justify="space-between" h="100%" gap={6}>
        <Text fw={500} size="md">
          {title}
        </Text>
        <Text fw={500} size="xl">
          {value}
        </Text>
        <Flex align="center" gap={6}>
          <Text size="sm" fw={600} c={percentage.includes('-') ? 'red' : 'green'}>
            {percentage}
          </Text>
          {percentage.includes('-') ? (
            <IconTrendingDown size={18} color="var(--mantine-color-red-6)" />
          ) : (
            <IconTrendingUp size={18} color="var(--mantine-color-green-6)" />
          )}
        </Flex>
        <Text p={2} size="xs" c="dimmed">
          vs Previous 30 Days
        </Text>
 
      </Flex>
      <ThemeIcon
        size={34}
        radius="md"
        color={color}
        variant="light"
        style={{ position: 'absolute', right: 16, top: 16 }}
      >
        <Icon size={18} />
      </ThemeIcon>
    </Card>
  );
}
 
function DonutChartCard({ title, data, label }) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
 
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      p="md"
      h="100%"
      style={{ background: isDark ? '#25262B' : '#FFFFFF' }}
    >
      <Text size="md" fw={500} mb="md">
        {title}
      </Text>
      <Flex justify="center" align="center" h="100%">
        <DonutChart
          data={data.map((item, idx) => ({
            name: item.name || `Segment ${idx + 1}`,
            value: item.value,
            color: item.color,
          }))}
          size={160}
          thickness={30}
          chartLabel={label || title}
          withTooltip
          withLabels
        />
      </Flex>
    </Card>
  );
}
 
export default function Dashboard() {
  return (
    <Container fluid>
      <Grid gutter="sm">
        {/* Stat Cards Section */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Grid gutter="sm">
            {stats.map((stat, idx) => (
              <Grid.Col span={6} key={idx}>
                <StatCard {...stat} />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
 
        {/* Donut Charts Section */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Grid gutter="sm">
            <Grid.Col span={6}>
              <DonutChartCard
                title="Returning Visitors"
                label="Visitors"
                data={[
                  { name: 'New', value: 300, color: 'yellow' },
                  { name: 'Returning', value: 100, color: 'teal' },
                  { name: 'Guest', value: 200, color: 'gray' },
                  { name: 'Other', value: 400, color: 'blue' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DonutChartCard
                title="Device Breakdown"
                label="Devices"
                data={[
                  { name: 'Mobile', value: 150, color: 'orange' },
                  { name: 'Desktop', value: 100, color: 'violet' },
                  { name: 'Tablet', value: 90, color: 'pink' },
                  { name: 'Others', value: 20, color: 'gray' },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
 
 