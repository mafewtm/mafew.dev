import { IconBrandGithubFilled, IconBrandDiscordFilled, IconMailFilled, IconMugFilled } from '@tabler/icons-solidjs';

export default function App() {
  return (
    <main class='flex min-h-screen flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_center,var(--color-neutral-900)_0%,var(--color-neutral-950)_100%)] text-neutral-300 dark:bg-neutral-950 dark:text-neutral-200 transition-colors'>
      <div class='text-center animate-fade-in-up'>
        <h1 class='text-4xl font-bold text-neutral-100 dark:text-white'>
          Hi, I'm Matthew :)
        </h1>
        <p class='text-lg text-neutral-400 dark:text-neutral-500'>
          Nothing to see here yet. More to come soon!
        </p>
      </div>
      <nav class='flex items-center gap-5 mt-2 animate-fade-in' aria-label='Social links'>
        <a aria-label='Github' href='https://github.com/mafewtm' target='_blank' rel='noopener noreferrer' class='rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-900 dark:focus:ring-offset-neutral-950'>
          <IconBrandGithubFilled size={22} />
        </a>
        <a aria-label='Discord' href='https://discord.com/users/272829359117697025' target='_blank' rel='noopener noreferrer' class='rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-900 dark:focus:ring-offset-neutral-950'>
          <IconBrandDiscordFilled size={22} />
        </a>
        <a aria-label='Email' href='mailto:mafewtm@gmail.com' target='_blank' rel='noopener noreferrer' class='rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-900 dark:focus:ring-offset-neutral-950'>
          <IconMailFilled size={22} />
        </a>
        <a aria-label='Ko-fi' href='https://ko-fi.com/mafewtm' target='_blank' rel='noopener noreferrer' class='rounded-full p-2 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-900 dark:focus:ring-offset-neutral-950'>
          <IconMugFilled size={22} />
        </a>
      </nav>
    </main>
  );
}