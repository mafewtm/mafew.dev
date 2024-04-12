import { Box, Stack, Title, Text, Group, UnstyledButton } from '@mantine/core';
import ColorToggle from './components/colortoggle/colortoggle';
import classes from './index.module.css';
import { FaGithub } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';

interface SocialMediaProps {
  icon: any;
  link: string;
}

function SocialMedia({ icon: Icon, link }: SocialMediaProps) {
	return (
    <UnstyledButton component='a' href={link}>
      <Icon />
    </UnstyledButton>
	);
}

export default function App() {
  return (
    <Box className={classes.container}>
      <Stack align='center'>
        <Title className={classes.title}>Hi, I'm Matthew :)</Title>
        <Text c='dimmed' size='lg' ta='center' className={classes.description}>
          Nothing to see here yet. More to come soon!
        </Text>
        <Group className={classes.socialMedia}>
          <SocialMedia icon={FaGithub} link='https://github.com/mafewtm' />
          <SocialMedia icon={SiKofi} link='https://ko-fi.com/mafewtm' />
        </Group>
      </Stack>
      <ColorToggle />
    </Box>
  );
};
