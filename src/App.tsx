import { motion } from 'framer-motion';
import { SiDiscord, SiGithub, SiMinutemailer, SiKofi } from '@icons-pack/react-simple-icons';

const socials = [
  { href: 'https://github.com/mafewtm', icon: SiGithub, label: 'GitHub' },
  { href: 'https://discord.com/users/272829359117697025', icon: SiDiscord, label: 'Discord' },
  { href: 'mailto:mafewtm@gmail.com', icon: SiMinutemailer, label: 'Email' },
  { href: 'https://ko-fi.com/mafewtm', icon: SiKofi, label: 'Ko-fi' },
];

export default function App() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_center,_theme(colors.neutral.900)_0%,_theme(colors.neutral.950)_100%)] text-neutral-300 dark:bg-neutral-950 dark:text-neutral-200 transition-colors'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center'
      >
        <h1 className='text-4xl font-bold text-neutral-100 dark:text-white'>
          Hi, I'm Matthew :)
        </h1>
        <p className='text-lg text-neutral-400 dark:text-neutral-500'>
          Nothing to see here yet. More to come soon!
        </p>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='flex items-center gap-5 mt-2'
        aria-label='Social links'
      >
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-900 dark:focus:ring-offset-neutral-950'
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.nav>
    </main>
  );
}
