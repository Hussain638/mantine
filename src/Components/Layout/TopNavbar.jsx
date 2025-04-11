import {
  Box,
  Flex,
  Input,
  ActionIcon,
  Avatar,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconMenu2,
  IconSearch,
  IconBell,
  IconSun,
  IconMoon,
  IconX,
} from '@tabler/icons-react';

export default function TopNavbar({ isToggleOpen, setIsToggleOpen }) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const leftOffset = 60 + (isToggleOpen ? 240 : 0);

  return (
    <Box
      h={60}
      px="md"
      bg={isDark ? "rgb(40, 40, 44)" : theme.colors.gray[0]}
      ml={ isToggleOpen ? 9 : 4}
      sx={{
        position: 'fixed',
        top: 0,
        left: leftOffset,
        transition: 'left 0.3s ease, width 0.3s ease',
        zIndex: 500,
        borderBottom: `1px solid ${
          isDark ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      }}
    >
      <Flex align="center" justify="space-between" h="100%">
        <Flex align="center" gap="sm" ml={6}>
          <ActionIcon
            variant="subtle"
            color= {isDark ? "#FFFFFF" :"black"}
            size="lg"
            onClick={() => setIsToggleOpen((prev) => !prev)}
            m={7}
          >
            {isToggleOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </ActionIcon>

          <Input
            icon={<IconSearch size={14} />}
            placeholder="Search..."
            radius="md"
            size="sm"
            styles={{
              input: {
                backgroundColor: 'transparent',
                color: isDark ? 'white' : 'black',
                borderColor: isDark ? '#444' : '#ccc',
              },
              icon: {
                color: isDark ? '#888' : '#555',
              },
            }}
          />
        </Flex>

        <Flex align="center" gap="md">
          <ActionIcon variant="subtle" color="gray" size="lg">
            <IconBell size={22} />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            color="gray"
            onClick={toggleColorScheme}
            style={{ border: '1px solid grey', borderRadius: '8px' }}
          >
            {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>

          <Avatar
            radius="xl"
            size="md"
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="User"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
