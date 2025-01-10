'use client'

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/16/solid";

export default function EditBanner() {

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
                className='w-52 origin-top-right rounded-md border border-white/10 bg-white/10 p-1'>

                    <MenuItem>
                        <button className="flex w-full group rounded-md bg-gray items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10">
                            Edit
                            <PencilIcon className="size-4"/>
                        </button>
                    </MenuItem>
                </MenuItems>

            </Menu>
        </div>
    );
}