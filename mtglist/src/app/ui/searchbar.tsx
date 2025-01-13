'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({placeholder} : {placeholder:string}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    
    const handleSearch = useDebouncedCallback((name) => {

        const params = new URLSearchParams(searchParams);
        if (name) {
            params.set('query', name);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);

        console.log(name);
    }, 300);

    return(
        <div className="flex flex-1 gap-2 items-center">
            <input className="block w-full bg-gray-300 rounded-md border border-gray-100 text-black px-1"
            placeholder={placeholder}
            onChange={(e) => {handleSearch(e.target.value)}}
            defaultValue={searchParams.get('query')?.toString()}/>
            <MagnifyingGlassIcon className="size-5"/>
        </div>
    );
}