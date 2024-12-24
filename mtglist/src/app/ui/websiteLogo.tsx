import {lusitana} from './fonts';

export default function WebsiteLogo() {

    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <img
                src='/profileImages/gontiCannyAcquisitor.jpg'
                className='h-24 w-24 rounded-full outline outline-4 outline-white-300'>
            </img>
            <p className='pl-2 text-[44px] '>IyXuan's Mess</p>
        </div>
    );
}