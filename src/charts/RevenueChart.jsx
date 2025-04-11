import { Card, Text, Group, Grid, Flex, useMantineColorScheme, rem } from '@mantine/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "@tabler/icons-react";
 
// Sample Data
const data1 = [
  { name: 'January', smartphones: 1000, laptops: 800, tablets: 200 },
  { name: 'February', smartphones: 1800, laptops: 1000, tablets: 700 },
  { name: 'March', smartphones: 500, laptops: 900, tablets: 200 },
  { name: 'April', smartphones: 900, laptops: 600, tablets: 400 },
  { name: 'May', smartphones: 900, laptops: 1200, tablets: 1500 },
  { name: 'June', smartphones: 800, laptops: 1000, tablets: 800 },
  { name: 'July', smartphones: 100, laptops: 400, tablets: 500 },
  { name: 'August', smartphones: 1000, laptops: 900, tablets: 300 },
  { name: 'September', smartphones: 900, laptops: 1200, tablets: 600 },
  { name: 'October', smartphones: 800, laptops: 600, tablets: 400 },
  { name: 'November', smartphones: 600, laptops: 700, tablets: 800 },
  { name: 'December', smartphones: 700, laptops: 1000, tablets: 1000 },
];

const data2 = [
  { name: 'January', smartphones: 100, laptops: 1000, tablets: 200 },
  { name: 'February', smartphones: 180, laptops: 100, tablets: 700 },
  { name: 'March', smartphones: 5004, laptops: 200, tablets: 200 },
  { name: 'April', smartphones: 400, laptops: 600, tablets: 400 },
  { name: 'May', smartphones: 500, laptops: 500, tablets: 1500 },
  { name: 'June', smartphones: 1000, laptops: 2000, tablets: 800 },
  { name: 'July', smartphones: 200, laptops: 1000, tablets: 500 },
  { name: 'August', smartphones: 500, laptops: 400, tablets: 300 },
  { name: 'September', smartphones: 2000, laptops: 1200, tablets: 600 },
  { name: 'October', smartphones: 300, laptops: 900, tablets: 400 },
  { name: 'November', smartphones: 100, laptops: 100, tablets: 800 },
  { name: 'December', smartphones: 100, laptops: 500, tablets: 1000 },
];
 
// Main colors for each category
const colors = {
  smartphones: '#3B82F6',
  laptops: '#22C55E',
  tablets: '#FACC15',
};
 
const hoverColors = {
  smartphones: '#60A5FA',
  laptops: '#4ADE80',
  tablets: '#FDE047',
};
 
const CustomLegend = ({ hoveredKey, setHoveredKey }) => {
  const items = [
    { key: 'smartphones', label: 'Smartphones', color: colors.smartphones },
    { key: 'laptops', label: 'Laptops', color: colors.laptops },
    { key: 'tablets', label: 'Tablets', color: colors.tablets },
  ];

 
  return (
    <Group spacing="lg">
      {items.map((item) => (
        <span
          key={item.key}
          onMouseEnter={() => setHoveredKey(item.key)}
          onMouseLeave={() => setHoveredKey(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
            opacity: hoveredKey && hoveredKey !== item.key ? 0.4 : 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: item.color,
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          <Text size="sm">{item.label}</Text>
        </span>
      ))}
    </Group>
  );
};
 
const RevenueChart = ( {dateRange}) => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [date, setDate] = useState(new Date());
  const bgColor = isDark ? '#1E1E2F' : '#FFFFFF';
  const axisColor = isDark ? '#AAA' : '#333';
  const gridColor = isDark ? '#444' : '#E0E0E0';
  const [startDate,endDate] = dateRange;
  const [data, setData] = useState(data1)

  const getDisplayText = () => {
    return date ? `${date.toLocaleDateString()}` : "Pick a date";
  };

  useEffect(() => {
    if (startDate && endDate) {
     setData(data2);
    }
 },[startDate,endDate])
 
  return (
    <Card
      radius="md"
      padding="md"
      style={{
        backgroundColor: bgColor,
        height: '100%',
        width: '100%',
      }}
      shadow="md"
    >
      <Flex justify="space-between" align="center" mb="md">
        <Text weight={500} size="md">Average Revenue</Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: isDark ? "#2e2e2e" : "#f1f1f1",
            borderRadius: "8px",
            padding: "5px 10px",
            maxWidth: "100%",
          }}
        >
          <IconCalendar
            size={16}
            color={isDark ? "#ccc" : "#555"}
            style={{ marginRight: "6px" }}
          />
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            startDate={date}
            placeholderText="select date"
            dateFormat="dd/MM/yyyy"
            calendarStartDay={1}
            showPopperArrow={false}
            popperPlacement="left-start"
            className={`custom-datepicker-input ${isDark ? "dark" : "light"}`}
            calendarClassName={isDark ? "dark-calendar" : "light-calendar"}
            customInput={
              <input
                value={getDisplayText()}
                readOnly
                style={{
                  backgroundColor: "transparent",
                  color: isDark ? "#fff" : "#000",
                  fontSize: "12px",
                  border: "none",
                  width: `${getDisplayText().length + 2}ch`,
                  transition: "width 0.3s ease",
                }}
              />
            }
          />
        </div>
      </Flex>
 
      <Grid justify="end" mb={2}>
        <CustomLegend hoveredKey={hoveredKey} setHoveredKey={setHoveredKey} />
      </Grid>
 
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          onMouseLeave={() => setHoveredIndex(null)}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          maxBarSize={16}
        >
          <CartesianGrid strokeDasharray="6 6" stroke={gridColor} vertical={false} />
         
          {/* X Axis */}
          <XAxis
            dataKey="name"
            stroke={axisColor}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }} // Smaller labels
          />
         
          {/* Y Axis */}
          <YAxis
            stroke={axisColor}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }} // Smaller labels
          />
         
          <Tooltip />
 
          {/* Render each Bar */}
          {Object.keys(colors).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              type="stacked"
              stackId="a"
              fill={hoveredKey === key ? hoverColors[key] : colors[key]}
              fillOpacity={hoveredKey && hoveredKey !== key ? 0.2 : 1}
              onMouseOver={(e) => {
                if (e?.index != null) setHoveredIndex(e.index);
              }}
              isAnimationActive={true}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
 
export default RevenueChart;

