import { Group, Tooltip, UnstyledButton, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { LuSun, LuMoon } from 'react-icons/lu';
import classes from './colortoggle.module.css';
export default function ColorToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const Icon = computedColorScheme === 'light' ? LuMoon : LuSun

  return (
    <Group className={classes.button}>
      <Tooltip label={'Change theme'} position='right' transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} className={classes.link}>
          <Icon className={classes.icon} strokeWidth={1.5} />
        </UnstyledButton>
      </Tooltip>
    </Group>
  );
}
