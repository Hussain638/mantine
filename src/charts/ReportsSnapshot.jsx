import {
  Card,
  Group,
  Text,
  Box,
  Flex,
  Title,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "@tabler/icons-react";

// Chart data
const data = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 220 },
  { month: "March", value: 25 },
  { month: "April", value: 100 },
  { month: "May", value: 40 },
  { month: "June", value: 110 },
  { month: "July", value: 85 },
  { month: "Aug", value: 100 },
  { month: "Sep", value: 120 },
  { month: "Oct", value: 140 },
  { month: "Nov", value: 40 },
  { month: "Dec", value: 70 },
];

const data1 = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 120 },
  { month: "March", value: 55 },
  { month: "April", value: 200 },
  { month: "May", value: 80 },
  { month: "June", value: 210 },
  { month: "July", value: 35 },
  { month: "Aug", value: 50 },
  { month: "Sep", value: 20 },
  { month: "Oct", value: 30 },
  { month: "Nov", value: 120 },
  { month: "Dec", value: 180 },
];

// StatCard Component
const StatCard = ({ label, value, bgColor, gradient, textColor }) => (
  <Card
    padding="md"
    radius="md"
    withBorder={false}
    style={{
      backgroundColor: bgColor,
      position: "relative",
      color: textColor,
      fontWeight: "bold",
      flex: 1,
      overflow: "hidden",
      zIndex:0
    }}
  >
    <Box
      style={{
        position: "absolute",
        top: -24,
        right: -24,
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: gradient,
        opacity: 0.35,
        zIndex: 0,
      }}
    />
    <Box
      style={{
        position: "absolute",
        top: -24,
        right: -24,
        width: 70,
        height: 70,
        borderRadius: "50%",
        background: gradient,
        opacity: 0.6,
        zIndex: 0,
      }}
    />
    <Box style={{ zIndex: 1, position: "relative" }}>
      <Text size="sm" weight={600}>
        {label}
      </Text>
      <Text size="xl" weight={700} mt={4}>
        {value}
      </Text>
    </Box>
  </Card>
);

const ReportsSnapshot = ({ dateRange }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const text = isDark ? theme.white : theme.black;

  const [chartData, setChartData] = useState(data);
  const [statsData, setStatsData] = useState([
    {
      label: "All User",
      value: "10,234",
      bgColor: isDark ? "#adb5bd" : "#e9ecef",
      gradient: "radial-gradient(circle at center, #343A40, #6C757D)",
      textColor: text,
    },
    {
      label: "Event Count",
      value: "536",
      bgColor: "#FF8800",
      gradient: "radial-gradient(circle at center, #FEB36A, #FFD8A8)",
      textColor: "white",
    },
    {
      label: "Conversations",
      value: "21",
      bgColor: "#00C853",
      gradient: "radial-gradient(circle at center, #79D989, #B2F2BB)",
      textColor: "white",
    },
    {
      label: "New Users",
      value: "3,321",
      bgColor: "#2196F3",
      gradient: "radial-gradient(circle at center, #64B1F3, #A5D8FF)",
      textColor: "white",
    },
  ]);

  const [date, setDate] = useState(new Date());
  const [startDate, endDate] = dateRange;

  const chartBg = isDark
    ? "#25262B"
    : "linear-gradient(to top, #f1f3f5, #ffffff)";
  const baseBg = isDark ? "#25262B" : "#FFFFFF";
  const grid = isDark ? "#3A3A3A" : "#ddd";
  const gradientId = isDark ? "gradientDark" : "gradientLight";

  useEffect(() => {
    if (startDate && endDate) {
      setChartData(data1);
      setStatsData([
        {
          label: "All User",
          value: "1033",
          bgColor: isDark ? "#adb5bd" : "#e9ecef",
          gradient: "radial-gradient(circle at center, #343A40, #6C757D)",
          textColor: text,
        },
        {
          label: "Event Count",
          value: "53645",
          bgColor: "#FF8800",
          gradient: "radial-gradient(circle at center, #FEB36A, #FFD8A8)",
          textColor: "white",
        },
        {
          label: "Conversations",
          value: "213",
          bgColor: "#00C853",
          gradient: "radial-gradient(circle at center, #79D989, #B2F2BB)",
          textColor: "white",
        },
        {
          label: "New Users",
          value: "33",
          bgColor: "#2196F3",
          gradient: "radial-gradient(circle at center, #64B1F3, #A5D8FF)",
          textColor: "white",
        },
      ]);
    }
  }, [startDate, endDate, isDark, text]);

  const getDisplayText = () =>
    date ? `${date.toLocaleDateString()}` : "Pick a date";

  return (
    <Card radius="md" p="lg" style={{ background: baseBg }}>
      <Flex justify="space-between" align="center" mb="md">
        <Box>
          <Title order={3} style={{ color: text }}>
            Reports Snapshot
          </Title>
          <Text color={isDark ? "gray.5" : "gray.7"} size="sm">
            Demographic properties of your customer
          </Text>
        </Box>
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

      <Group spacing="md" mt="sm" grow>
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </Group>

      <Box mt="xl" h={240} style={{ background: chartBg, borderRadius: 8 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="gradientDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#fff" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="gradientLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#000" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="6 6" stroke={grid} vertical={false} />
            <XAxis
              dataKey="month"
              stroke={text}
              axisLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              stroke={text}
              axisLine={false}
              tick={{ fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{ background: isDark ? "#333" : "#fff", border: "none" }}
              labelStyle={{ color: text }}
              itemStyle={{ color: text }}
            />
            <Area
              type="bump"
              dataKey="value"
              stroke={text}
              fill={`url(#${gradientId})`}
              strokeWidth={3}
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default ReportsSnapshot;
