import { fetchSearchedCards } from "../lib/data";

export default async function SearchTable({
    query, currentPage} : {query: string, currentPage: number}) {

    const cards = await fetchSearchedCards(query, currentPage);
    console.log(cards);

    return(
        <div>
            Cards were searched
        </div>
    );
}