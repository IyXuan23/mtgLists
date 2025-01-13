'use client'

import { Pagination } from "@nextui-org/pagination";
import { useSearchParams, useRouter } from "next/navigation";

export function EditPagination({currentPage, totalPages}: 
    {currentPage: number, totalPages: number}) {

    /*NOTE: there current is a visual issue, where if a page is selected (eg.3) and the
    query is changed, the blue selected page visual will remain stuck in the previous number (still 3), 
    despite the new page being reset to 1. The currentPage and totalPages both update correctly, this is mainly
    visual, and despite numerous attempts has yet to been resolved*/

    const searchParams = useSearchParams();
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());

        router.push(`?${params.toString()}`);

    }

    return(
        <Pagination 
            initialPage={currentPage} 
            total={totalPages} 
            variant="bordered"
            showControls 
            size="md"
            classNames={{item: 'text-white'}}
            onChange={handlePageChange}>
        </Pagination>
    )
}