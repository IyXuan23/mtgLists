import {lusitana} from './fonts';

export default function WebsiteLogo() {

    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <img
                src='/mainMenu/gontiCannyAcquisitor.svg'
                className='h-24 w-24 rounded-full outline outline-4 outline-white-300'>
            </img>
            <p className='pl-2 text-[32px] '>IyXuan&apos;s Mess</p>
        </div>
    );
}