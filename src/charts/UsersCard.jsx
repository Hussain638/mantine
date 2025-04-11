import {
    Card,
    Text,
    Box,
    Flex,
    Table,
    useMantineTheme,
    useMantineColorScheme,
  } from "@mantine/core";
  import { IconTrendingUp } from "@tabler/icons-react";
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { useState,useEffect } from "react";
   
  const barData = [
    { name: "A", value: 20 },
    { name: "B", value: 35 },
    { name: "C", value: 10 },
    { name: "D", value: 25 },
    { name: "E", value: 20 },
    { name: "F", value: 20 },
  ];
  const barData1 = [
    { name: "A", value: 10 },
    { name: "B", value: 55 },
    { name: "C", value: 50 },
    { name: "D", value: 10 },
    { name: "E", value: 40 },
    { name: "F", value: 10 },
  ];
   
  const countries = [
    { country: "Bangladesh", users: "05" },
    { country: "India", users: "06" },
    { country: "Pakistan", users: "06" },
    { country: "Australia", users: "10" },
  ];
  const countries1 = [
    { country: "Bangladesh", users: "06" },
    { country: "India", users: "07" },
    { country: "Pakistan", users: "08" },
    { country: "Australia", users: "15" },
  ];
   
  const UsersCard = ({dateRange}) => {
    const { colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const isDark = colorScheme === "dark";
    const [barDataShow, setBarDataShow] = useState(barData);
    const [countryData, setCountryData] = useState(countries);

    const [startDate, endDate] = dateRange;
   
    const textPrimary = isDark ? theme.colors.gray[0] : theme.colors.gray[9];
    const textSecondary = isDark ? theme.colors.gray[4] : theme.colors.gray[6];
    const tableHeader = isDark ? theme.colors.gray[3] : theme.colors.gray[7];
    const cardBg = isDark ? "#25262B" : "#FFFFFF";
    const barColor = isDark ? "#ffffff" : "#333333";
    useEffect(() => {
      console.log("Date range changed:", startDate, endDate);
      if (startDate && endDate) {
        setBarDataShow(barData1);
        setCountryData(countries1);
      }
    }, [startDate, endDate]);
    
   
    return (
      <Card
        radius="md"
        p="md"
        w="100%"
        h="100%"
        style={{
          backgroundColor: cardBg,
        }}
      >
        {/* Header */}
        <Flex justify="space-between" align="start" mb="sm">
          <Box>
            <Text size="sm" fw={600} c={textPrimary}>
              Users
            </Text>
            <Text size="xs" c={textSecondary}>
              In Last 30 Minutes
            </Text>
          </Box>
   
          <Flex align="center" gap={4}>
            <Text size="xl" fz={35} fw={700} c={textPrimary}>
              63
            </Text>
            <IconTrendingUp size={20} color="var(--mantine-color-green-7)" />
          </Flex>
        </Flex>
   
        {/* Chart */}
        <Box my="sm" style={{ height: 130 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barDataShow}>
              <CartesianGrid strokeDasharray="9 9" vertical={false} stroke={isDark ? "#555" : "#ccc"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#444" : "#fff",
                  border: "none",
                  fontSize: "12px",
                }}
                labelStyle={{ display: "none" }}
              />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Bar
                dataKey="value"
                fill={barColor}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
   
        {/* Country Table */}
        <Box mt="md">
          <Text size="sm" fw={600} mb="xs" c={textPrimary}>
            Top Countries
          </Text>
   
          <Table
            withColumnBorders={false}
            withRowBorders={false}
            highlightOnHover={false}
            verticalSpacing="sm"
            horizontalSpacing="sm"
            fontSize="sm"
            striped
          >
            <thead>
              <tr>
                <th style={{ color: tableHeader, fontWeight: 600, textAlign: "left" }}>
                  Country
                </th>
                <th style={{ color: tableHeader, fontWeight: 600, textAlign: "right" }}>
                  Users
                </th>
              </tr>
            </thead>
            <tbody>
              {countryData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Text c={textSecondary}>{item.country}</Text>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Text c={textSecondary}>{item.users}</Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Card>
    );
  };
   
  export default UsersCard;