import { Card, Text, useMantineColorScheme } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { useState,useEffect } from 'react';
 
const TopBrowsersDonut = ({dateRange}) => {
  const { colorScheme } = useMantineColorScheme();
  console.log(colorScheme);
  const isDark = colorScheme === 'dark';
 
  const chartData1 = [
    { name: 'India', value: 400, color: '#3B82F6' },
    { name: 'USA', value: 300, color: '#22C55E' },
    { name: 'Japan', value: 300, color: '#F59E0B' },
    { name: 'China', value: 200, color: '#EF4444' },
    { name: 'Others', value: 100, color: '#8B5CF6' },
  ];
  const chartData2 = [
    { name: 'India', value: 100, color: '#3B82F6' },
    { name: 'USA', value: 300, color: '#22C55E' },
    { name: 'Japan', value: 400, color: '#F59E0B' },
    { name: 'China', value: 500, color: '#EF4444' },
    { name: 'Others', value: 600, color: '#8B5CF6' },
  ];
  const [chartData, setChartData] = useState(chartData1);
  const [startDate,endDate] = dateRange;

  useEffect(() => {
      if (startDate && endDate) {
       setChartData(chartData2);
      }
   },[startDate,endDate])

 
  return (
    <Card
      radius="md"
      padding="lg"
      shadow="md"
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: isDark ? '#1E1E2F' : '#fff',
      }}
    >
      <Text weight={600} size="lg" mb="md">
        Top Users by Country
      </Text>
      <DonutChart
        data={chartData}
        withTooltip
        withLabels
        chartLabel="Users By Country"
        strokeWidth={0}
        size={200}
        thickness={30}
        style={{ width: '100%',margin:'auto' }}
      />
    </Card>
  );
};
 
export default TopBrowsersDonut;