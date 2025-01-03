import React from 'react';
import WebsiteLogo from './ui/websiteLogo';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Home() {

  return(
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-orange-400 p-4 md:h-52'>
        <WebsiteLogo />
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          {/*was styles.shape before changed to tailwind */}
          <div className='h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-transparent border-b-black' />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to IyXuan&apos;s Mess.</strong> Click this link for the {' '}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='text-blue-500 underline' target='_blank'>
              Single Hot MTG Cards in your Area
            </a>
            , brought to you by Arboretum Esports.
          </p>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-gray-400 rounded-lg'>
          {/* add images for display, [big is w-1000,760] [small is w-560,620]*/}
          <Image
            src="/mainMenu/3cardsMainMenu.png"
            width={1000}
            height={760}
            className='hidden md:block'
            alt='screenshots of 3 cards to show some flavour I guess'/>
        </div>
      </div>
    </main>
  );
}