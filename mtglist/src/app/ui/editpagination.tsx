'use client'

import { Pagination } from "@nextui-org/pagination";
import { useSearchParams, useRouter } from "next/navigation";

export function EditPagination({currentPage, totalPages}: 
    {currentPage: number, totalPages: number}) {

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