import { useState } from 'react';
import { useNuiEvent } from './hooks/useNuiEvent';
import { Box, Paper, Text } from '@mantine/core';
import classes from './index.module.css';

export default function App() {
  const [visible, setVisible] = useState(false);

  useNuiEvent('setVisible', (data: { visible: boolean; }) => {
    setVisible(data.visible);
  });

  return (
    <>
      {visible && (
        <Box className={classes.container}>
          <Paper className={classes.main} shadow='sm' p='sm'>
            <Text>Hello</Text>
          </Paper>
        </Box>
      )}
    </>
  );
};
