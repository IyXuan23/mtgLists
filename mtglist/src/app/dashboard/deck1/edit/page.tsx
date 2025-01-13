import SearchBar from "@/app/ui/searchbar";
import SearchTable from "@/app/ui/searchtable";
import { Suspense } from "react";
import { fetchAllSearchedCards } from "@/app/lib/data";
import { EditPagination } from "@/app/ui/editpagination";

export default async function Page(props: {
    searchParams?: Promise <{
        query?: string,
        page?:string }>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchAllSearchedCards(query);

    return(
        <div className="flex-1 bg-gray-100/20 rounded-md gap-2 p-2 flex flex-col h-[405px]">
            <div>Edit Deck</div>
            <div>
                <SearchBar placeholder="Search cards..."></SearchBar>
            </div>
            <div className="h-80">
                <Suspense key={query + currentPage}>
                    <SearchTable query={query} currentPage={currentPage}/>
                </Suspense>
            </div>
            <div>
                <EditPagination currentPage={currentPage} totalPages={totalPages}/>
            </div>
        </div>
    );
}