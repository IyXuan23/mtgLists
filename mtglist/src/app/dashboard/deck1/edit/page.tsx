import SearchBar from "@/app/ui/searchbar";
import SearchTable from "@/app/ui/searchtable";
import { Suspense } from "react";

export default async function Page(props: {
    searchParams?: Promise <{
        query?: string,
        page?:string }>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    
    return(
        <div className="flex-1 bg-gray-100/20 rounded-md gap-2 p-2 flex flex-col">
            <div>Edit Deck</div>
            <SearchBar placeholder="Search cards..."></SearchBar>
            <Suspense key = {query + currentPage}>
                <SearchTable query={query} currentPage={currentPage}>
                
                </SearchTable>
            </Suspense>
        </div>
    );
}