import React from 'react';
import SideNav from './ui/sidenav';
import WebsiteLogo from './ui/websiteLogo';


// export default function Home({children}: {children: React.ReactNode}) {
//   return (
//     <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
//       <div className='w-full flex-none md:w-64'>
//         <SideNav/>
//       </div>
//       <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
//     </div>
//   )<
// }

export default function Home() {

  return(
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-400 p-4 md:h-52'>
        <WebsiteLogo />
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          <div className='h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-transparent border-b-black'>

          </div>
        </div>
      </div>
    </main>
  );
}