'use client'

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function EditBanner() {

    const pathname = usePathname();

    return(
        <div className="flex justify-end p-4">
            <Menu>
                <MenuButton className='inline-flex rounded-md bg-gray-800 py-1.5 px-3 font-semibold shadow-inner shadow-white/10
                data-[hover]:bg-gray-700 data-[open]:bg-gray-700 items-center'>
                    Options
                    <ChevronDownIcon className="size-4"/>
                </MenuButton>
                <MenuItems transition
                anchor='bottom end'
                className='w-52 origin-top-right rounded-md border border-black/50 bg-gray-400/90 p-1 transition'>

                    <MenuItem>
                        <Link className="flex w-full group rounded-md bg-gray items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10"
                            href={pathname + '/edit'}>
                            Edit
                            <PencilIcon className="size-4"/>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <button className="flex w-full group rounded-md bg-gray items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10">
                            Delete
                            <TrashIcon className="size-4"/>
                        </button>
                    </MenuItem>
                </MenuItems>
                

            </Menu>
        </div>
    );
}