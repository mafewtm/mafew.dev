import { SiDiscord, SiGithub, SiMinutemailer, SiKofi } from '@icons-pack/react-simple-icons';

export default function App() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5 bg-zinc-900'>
      <h1 className='font-bold text-4xl text-[#c9c9c9]'>Hi, I'm Matthew :)</h1>
      <p className='m-0 p-0 text-lg text-[#828282]'>Nothing to see here yet. More to come soon!</p>
      <div className='flex flex-row justify-center items-center gap-4 text-[#c9c9c9]'>
        <a href='https://github.com/mafewtm' target='_blank' rel='noopener noreferrer'>
          <SiGithub size={16} aria-label='GitHub' />
        </a>
        <a href='https://discord.com/users/272829359117697025' target='_blank' rel='noopener noreferrer'>
          <SiDiscord size={16} aria-label='Discord' />
        </a>
        <a href='mailto:matthew@mafew.dev' target='_blank' rel='noopener noreferrer'>
          <SiMinutemailer size={16} aria-label='Email' />
        </a>
        <a href='https://ko-fi.com/mafewtm' target='_blank' rel='noopener noreferrer'>
          <SiKofi size={16} aria-label='Ko-fi' />
        </a>
      </div>
    </div>
  );
};