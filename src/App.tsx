import { Box, Stack, Title, Text } from '@mantine/core';
import ColorToggle from './components/colortoggle/colortoggle';
import classes from './index.module.css';

export default function App() {
  return (
    <Box className={classes.container}>
      <Stack align='center'>
        <Title className={classes.title}>Hi, I'm Matthew :)</Title>
        <Text c='dimmed' size='lg' ta='center' className={classes.description}>
          Nothing to see here yet. More to come soon!
        </Text>
      </Stack>
      <ColorToggle />
    </Box>
  );
};
