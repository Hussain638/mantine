import { useState ,useEffect} from "react";
import { Flex, Grid, Stack, Text } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import StatsCards from "../charts/StatsCard";
import AverageRevenueChart from "../charts/RevenueChart";
import TopBrowsersDonut from "../charts/TopBrowserDonut";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconCalendar } from "@tabler/icons-react";
 
export default function Ecommerce() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

   // Custom styles for dark and light calendar themes
     useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        .dark-calendar {
          background-color: #2e2e2e !important;
          color: #fff !important;
          border-radius: 10px;
          border: 1px solid #444;
        }
   
        .dark-calendar .react-datepicker__day,
        .dark-calendar .react-datepicker__day-name,
        .dark-calendar .react-datepicker__current-month {
          color: #fff !important;
        }
   
        .dark-calendar .react-datepicker__day--selected,
        .dark-calendar .react-datepicker__day--keyboard-selected {
          background-color: #339af0 !important;
          color: white !important;
        }
   
        .dark-calendar .react-datepicker__header {
          background-color: #3a3a3a !important;
          border-bottom: 1px solid #444;
        }
   
        .dark-calendar .react-datepicker__day:hover {
          background-color: #444 !important;
        }
   
        .light-calendar {
          background-color: #fff !important;
          color: #000 !important;
          border-radius: 10px;
          border: 1px solid #ddd;
        }
   
        .light-calendar .react-datepicker__day:hover {
          background-color: #eee !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);
 
  const getDisplayText = () => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    } else if (startDate) {
      return `${startDate.toLocaleDateString()} -`;
    }
    return "Pick a date";
  };
 
  return (
    <Flex w="100%" direction="column" gap={20} mt={10} p={15}>
      <Flex w="100%" align="center" justify="space-between" >
        <Text fz={{ base: 18, md: 22, lg: 22 }} fw={600}>
          Ecommerce Dashboard
        </Text>
 
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
            selected={startDate}
            onChange={(update) => setDateRange(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Pick date range"
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
 
      <Stack w="100%" align="stretch" justify="center">
        <StatsCards />
        <Grid gutter="xs">
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <AverageRevenueChart  dateRange={dateRange}/>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <TopBrowsersDonut dateRange={dateRange} />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Stack>
    </Flex>
  );
}