import { fetchSearchedCards } from "../lib/data";
import { assert } from 'console';

export default async function SearchTable({
    query, currentPage} : {query: string, currentPage: number}) {

    const cards = await fetchSearchedCards(query, currentPage);
    console.log(cards);

    assert(cards.length <= 7);

    return(
        <div className="flex flex-col gap-2">
            {cards.map((card) => {
                const cardName = card.card_name;
                return (
                    <button key={cardName} className="bg-gray-400/20 rounded-md p-2 text-left hover:bg-blue-400/10">
                        {cardName}
                    </button>
                )
            })}
        </div>
    );
}